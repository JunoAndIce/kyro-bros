'use server'

import { prisma } from '@/prisma/backend/prisma'
import { Resend } from 'resend'
import levenshtein from 'fast-levenshtein'

function normalize(str: string) {
  return str.toLowerCase().trim().replace(/\s+/g, ' ')
}

// Returns true if two names are close enough to be considered the same person.
// Threshold scales with name length so short names require exact matches.
function similarName(a: string, b: string): boolean {
  const na = normalize(a)
  const nb = normalize(b)
  if (na === nb) return true
  const threshold = na.length <= 6 ? 1 : 2
  return levenshtein.get(na, nb) <= threshold
}

export type InquiryState = {
  success: boolean
  error?: string
} | null

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const firstName    = formData.get('firstName') as string
  const lastName     = formData.get('lastName') as string
  const email        = formData.get('email') as string
  const phone        = formData.get('phone') as string | null
  const eventDate    = formData.get('eventDate') as string
  const eventAddress = formData.get('eventAddress') as string
  const guestCount   = formData.get('guestCount') as string | null
  const message      = formData.get('message') as string | null

  if (!firstName || !lastName || !email || !eventDate || !eventAddress) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000)

  // Pull all recent inquiries in one query instead of multiple round-trips
  const recentInquiries = await prisma.inquiry.findMany({
    where:  { createdAt: { gte: since24h } },
    select: { email: true, firstName: true, lastName: true, eventDate: true },
  })

  // 1. Same email submitted in the last 24 hours
  const emailDupe = recentInquiries.some(
    (i) => normalize(i.email) === normalize(email)
  )
  if (emailDupe) {
    return {
      success: false,
      error: "We already received an inquiry from this email. We'll be in touch soon!",
    }
  }

  // 2. Similar full name on the same event date
  const submittedDate = new Date(eventDate).toDateString()
  const fullName      = `${firstName} ${lastName}`
  const nameDupe = recentInquiries.some(
    (i) =>
      new Date(i.eventDate).toDateString() === submittedDate &&
      similarName(`${i.firstName} ${i.lastName}`, fullName)
  )
  if (nameDupe) {
    return {
      success: false,
      error: 'An inquiry with a similar name for this date was already submitted. Please contact us directly if this is a mistake.',
    }
  }

  try {
    await prisma.inquiry.create({
      data: {
        firstName,
        lastName,
        email,
        phone:        phone || null,
        eventDate:    new Date(eventDate),
        eventAddress,
        guestCount:   guestCount ? parseInt(guestCount) : null,
        message:      message || null,
      },
    })

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from:    'Kyro Bros <onboarding@resend.dev>',
      to:      email,
      subject: 'We received your inquiry!',
      html: `
        <h2>Hey ${firstName}, thanks for reaching out!</h2>
        <p>We got your inquiry for an event on <strong>${new Date(eventDate).toLocaleDateString()}</strong> at <strong>${eventAddress}</strong>.</p>
        <p>We'll be in touch shortly to go over the details.</p>
        <br/>
        <p>— The Kyro Bros Team</p>
      `,
    })

    return { success: true }
  } catch (e) {
    console.error(e)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
