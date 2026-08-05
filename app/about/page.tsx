import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import Footer from '../components/generic/footer'
import AboutStory from '../components/about/aboutStory'
import AboutValues from '../components/about/aboutValues'
import AboutTeam from '../components/about/aboutTeam'


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


      
      

      <AboutStory />

      <AboutValues />

      <AboutTeam />

      <Footer />
    </main>
  )
}
