import type { Metadata } from 'next'
import Navbar from '../components/home/navbar'
import ContactFaq from '../components/home/contactFaq'
import InquiryForm from '../components/home/InquiryForm'

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
      <section className="pb-18">
        <div className="mx-auto max-w-3xl px-3">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h2 className="title is-5 type-title mb-0! uppercase">Send an Inquiry</h2>
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          </div>
          <p className="mt-3 text-sm opacity-70 text-center">
            Tell us about your event and we&apos;ll get back to you fast.
          </p>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  )
}
