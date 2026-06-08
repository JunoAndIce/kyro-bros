import Image from 'next/image'
import Navbar from '@/app/components/home/navbar'
import Hero from '@/app/components/home/hero'
import Banner from '@/app/components/home/banner'
import PackagesHome from './components/home/packagesHome'
import ServicesHome from './components/home/servicesHome'


export default function Home() {


  return (
    <main className="lg:px-36">
      <Navbar />
      <Hero />
      <Banner />
      <PackagesHome />
      <ServicesHome />

    </main>
  )
}
