import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import ServicesHero from '../components/services/servicesHero'
import ServicesSelector from '../components/services/servicesSelector'
import Footer from '../components/generic/footer'
import Banner from '../components/home/banner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Flat-rate delivery zones, full setup & teardown, tent lighting and anchoring, and booking fees for tent, table, and chair rentals across the Houston area.',
  alternates: { canonical: '/services' },
}

export default function Services() {
  return (
    <main>
      <Navbar />
      <h1 className="sr-only">Our Services</h1>
      <ServicesHero />
      <Banner /> 
      <ServicesSelector />
      <Footer />
    </main>
  )
}
