import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kyro & Bros for quotes, questions, and bookings. Call or text 612-200-6350 — we reply fast.',
  alternates: { canonical: '/contact' },
}

export default function ContactUs() {
  return (
    <main className="px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p>Get in touch with us for inquiries and support.</p>
    </main>
  )
}
