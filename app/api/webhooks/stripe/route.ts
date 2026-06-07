import { NextRequest } from 'next/server'
import { stripe } from '@/prisma/backend/stripe'
import { prisma } from '@/prisma/backend/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body      = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    // Signature mismatch — reject the request
    return new Response(`Webhook signature verification failed: ${err}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session   = event.data.object
    const bookingId = session.metadata?.bookingId

    if (bookingId) {
      const booking = await prisma.booking.update({
        where: { id: bookingId },
        data:  { status: 'CONFIRMED', depositPaid: true },
      })

      await resend.emails.send({
        from:    'Kyro Bros <onboarding@resend.dev>',
        to:      booking.email,
        subject: 'Your booking is confirmed!',
        html: `
          <h2>You're all set, ${booking.firstName}!</h2>
          <p>Your deposit has been received and your event is officially booked.</p>
          <table style="border-collapse:collapse;margin-top:16px">
            <tr><td style="padding:4px 12px 4px 0;color:#666">Date</td><td><strong>${new Date(booking.eventDate).toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Location</td><td><strong>${booking.eventAddress}</strong></td></tr>
            ${booking.guestCount ? `<tr><td style="padding:4px 12px 4px 0;color:#666">Guests</td><td><strong>${booking.guestCount}</strong></td></tr>` : ''}
            <tr><td style="padding:4px 12px 4px 0;color:#666">Remaining balance</td><td><strong>$${(booking.totalPrice * 0.7).toFixed(2)}</strong></td></tr>
          </table>
          <p style="margin-top:24px">If you have any questions, just reply to this email.</p>
          <p>— The Kyro Bros Team</p>
        `,
      })
    }
  }

  return new Response(null, { status: 200 })
}
