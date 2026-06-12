import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import ServicesHero from '../components/services/servicesHero'
import ServicesSelector from '../components/services/servicesSelector'
import Footer from '../components/generic/footer'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Subscription plans, individual party supplies, delivery, and full setup & teardown services for events across the Houston area.',
  alternates: { canonical: '/services' },
}

export default function Services() {
  return (
    <main>
      <Navbar />
      <h1 className="sr-only">Our Services</h1>
      <ServicesHero />
      <ServicesSelector />
      <Footer />
    </main>
  )
}
