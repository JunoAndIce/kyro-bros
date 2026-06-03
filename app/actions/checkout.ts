'use server'

import { stripe } from '@/prisma/backend/stripe'
import { prisma } from '@/prisma/backend/prisma'
import { redirect } from 'next/navigation'

// Call this when Kyro Bros confirms an inquiry and wants to collect a deposit.
export async function createDepositCheckout(bookingId: string) {
  const booking = await prisma.booking.findUniqueOrThrow({
    where: { id: bookingId },
    include: { deliveryPackage: true, items: { include: { product: true } } },
  })

  const depositAmount = Math.round(booking.totalPrice * 0.3) // 30% deposit

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: depositAmount * 100, // Stripe uses cents
          product_data: {
            name: `Deposit — Kyro Bros Event (${new Date(booking.eventDate).toLocaleDateString()})`,
            description: `30% deposit for event at ${booking.eventAddress}`,
          },
        },
      },
    ],
    metadata: {
      bookingId,       // passed to webhook so we know which booking was paid
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:  `${process.env.NEXT_PUBLIC_APP_URL}/booking/cancelled`,
  })

  redirect(session.url!)
}
