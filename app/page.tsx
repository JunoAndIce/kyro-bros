import Navbar from '@/app/components/navbar'
import Hero from '@/app/components/hero'
import Banner from '@/app/components/banner'

export default function Home() {
  return (
    <main className="lg:px-48 lg:py-6">
      <Navbar />
      <Hero />
      <Banner />
    </main>
  )
}
