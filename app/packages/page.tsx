import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import PackagesHero from '../components/packages/packagesHero'
import PackagesSelector from '../components/packages/packagesSelector'
import Footer from '../components/generic/footer'
import Banner from '../components/home/banner'


export const metadata: Metadata = {
  title: 'Packages & Party Supplies',
  description:
    'Browse curated event packages, subscription plans, and individual party supplies from Kyro & Bros in Houston, TX.',
  alternates: { canonical: '/packages' },
}

export default function Products() {
  return (
    <main className="">
      <Navbar />
      <h1 className="sr-only">Packages &amp; Party Supplies</h1>
      <PackagesHero />
      <Banner />
      <PackagesSelector />
      <Footer />
    </main>
  )
}
