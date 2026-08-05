import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import PackagesHero from '../components/packages/packagesHero'
import PackagesSelector from '../components/packages/packagesSelector'
import Footer from '../components/generic/footer'
import Banner from '../components/home/banner'


export const metadata: Metadata = {
  title: 'Rental Packages & Pricing',
  description:
    'Tent, table, and chair rental packages from $110 a day, plus à la carte rates, multi-day multipliers, and booking fees from Kyro & Bros in Houston, TX.',
  alternates: { canonical: '/packages' },
}

export default function Products() {
  return (
    <main className="">
      <Navbar />
      <h1 className="sr-only">Rental Packages &amp; Pricing</h1>
      <PackagesHero />
      <Banner />
      <PackagesSelector />
      <Footer />
    </main>
  )
}
