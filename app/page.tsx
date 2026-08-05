import type { Metadata } from 'next'
import Navbar from '@/app/components/generic/navbar'
import Hero from '@/app/components/home/hero'
import Banner from '@/app/components/home/banner'
import AboutHome from './components/home/aboutHome'
import PackagesHome from './components/home/packagesHome'
import ServicesHome from './components/home/servicesHome'
import PackagePricing from './components/home/packagePricing'
import Footer from './components/generic/footer'

// title and description come from the root layout defaults
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}


export default function Home() {


  return (
    <main className="">
      <Navbar />
      <Hero />
      <Banner />
      <AboutHome />
      <PackagesHome />
      <ServicesHome />
      <PackagePricing />
      <Footer />
    </main>
  )
}
