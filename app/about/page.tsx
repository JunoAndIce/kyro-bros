import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import Footer from '../components/generic/footer'
import AboutTeam from '../components/about/aboutTeam'
import Image from 'next/image'
import confetti from '@/public/confetti.webp'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Kyro & Bros — a Houston party supply rental team making events easy, stress-free, and fun.',
  alternates: { canonical: '/about' },
}

export default function AboutUs() {
  return (
    <main className="">
      <Navbar />


      
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-21 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
            <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-white/80">Kyro &amp; Bros</p>
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
          </div>
          <h2 className="title is-2 type-title has-text-white font-black! text-4xl! lg:text-6xl! mt-3 mb-0!">
            Learn About Us
          </h2>
          <p className="mt-4 text-sm lg:text-base text-white/85 max-w-xl mx-auto">
            Discover the story behind our company and what makes us different.
          </p>
        </div>
      </div>

      <AboutTeam />

      <Footer />
    </main>
  )
}
