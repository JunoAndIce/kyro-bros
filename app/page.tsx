import Image from 'next/image'
import Navbar from '@/app/components/home/navbar'
import Hero from '@/app/components/home/hero'
import Banner from '@/app/components/home/banner'
import PackagesHome from './components/home/packagesHome'
import ServicesHome from './components/home/servicesHome'
import Subscription from './components/home/subscription'
import Footer from './components/home/footer'


export default function Home() {


  return (
    <main className="">
      <Navbar />
      <Hero />
      <Banner />
      <PackagesHome />
      <ServicesHome />
      <Subscription />
      <Footer />
      <div>
        
      </div>

    </main>
  )
}
