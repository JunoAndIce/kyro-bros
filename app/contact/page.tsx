import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import ContactFaq from '../components/contact/contactFaq'
import ContactForm from '../components/contact/contactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kyro & Bros for quotes, questions, and bookings. Call or text 612-200-6350 — we reply fast.',
  alternates: { canonical: '/contact' },
}

export default function ContactUs() {
  return (
    <main>
      <Navbar />
      <h1 className="sr-only">Contact Us</h1>
      <ContactFaq />
      <ContactForm />
    </main>
  )
}
