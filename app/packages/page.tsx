import type { Metadata } from 'next'
import Navbar from '../components/generic/navbar'
import Image from 'next/image'
import Link from 'next/link'
import confetti from '@/public/confetti.webp'


const items = [
  {
    title: 'Budget Friendly',
    desc: "Affordable rentals that don't compromise quality. Perfect for small events.",
    price: '$49',
    featured: false,
  },
  {
    title: 'Event Packages',
    desc: 'Curated packages to fit your guest count and style. Save time and money.',
    price: '$199',
    featured: true,
  },
  {
    title: 'Subscription Plans',
    desc: 'Hosting events regularly? Ask about our monthly subscription options.',
    price: null,
    featured: false,
  },
]

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

      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-14 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
            <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-white/80">Kyro &amp; Bros</p>
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
          </div>
          <h2 className="title is-2 type-title has-text-white font-black! text-4xl! lg:text-6xl! mt-3 mb-0!">
            Find the Perfect Solution
          </h2>
          <p className="mt-4 text-sm lg:text-base text-white/85 max-w-xl mx-auto">
            Whether you're planning a small gathering or a large celebration, we have the perfect package for you.
          </p>
        </div>
      </div>
      
      <div className="py-18">
      <div className="container text-center px-3">
        <div className="flex items-center justify-center gap-4">
          <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          <h2 className="title is-5 type-title mb-0! uppercase">Flexible Options for Every Event</h2>
          <span className="h-0.5 w-8 bg-red-800 shrink-0" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          {items.map(({ title, desc, price, featured }) => (
            <div
              key={title}
              className={`relative flex flex-col items-center flex-1 min-w-0 bg-background px-6 py-8 rounded border ${
                featured ? 'border-blue-700' : 'border-blue-700/20'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 type-title text-xs font-bold uppercase tracking-wide bg-blue-700 text-white rounded-full px-4 py-1">
                  Most Popular
                </span>
              )}
              <p className="type-title font-bold text-sm uppercase">{title}</p>
              <p className="mt-3 text-sm opacity-70">{desc}</p>
              <div className="mt-auto pt-6">
                {price ? (
                  <>
                    <p className={`type-title text-xs font-bold uppercase tracking-wide ${featured ? 'text-blue-700' : 'text-red-800'}`}>
                      Starting at
                    </p>
                    <p className={`type-title text-3xl font-bold ${featured ? 'text-blue-700' : 'text-red-800'}`}>{price}</p>
                  </>
                ) : (
                  <Link href="/contact" className="button is-link">Learn More</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
  )
}
