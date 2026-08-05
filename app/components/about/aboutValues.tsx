import Image from 'next/image'
import { Store, HeartHandshake, PartyPopper, Quote } from 'lucide-react'
import confetti from '@/public/confetti.webp'

const values = [
  {
    icon: Store,
    title: 'Community First',
    desc: 'As a locally owned small business, we take immense pride in supporting our neighbors, local organizations, and surrounding neighborhoods.',
  },
  {
    icon: HeartHandshake,
    title: 'Family-Centered Service',
    desc: 'We treat every client like family, offering upfront pricing, honest communication, and trustworthy equipment.',
  },
  {
    icon: PartyPopper,
    title: 'Focus on What Matters',
    desc: 'We handle the shelter and seating so you can focus on creating unforgettable memories with your guests.',
  },
]

export default function AboutValues() {
  return (
    <section>
      <div className="container px-3 py-12 lg:py-20 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          <h2 className="title is-5 type-title mb-0! uppercase">What Drives Us</h2>
          <span className="h-0.5 w-8 bg-red-800 shrink-0" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center flex-1 min-w-0 bg-background px-6 py-8 rounded border border-blue-700/20"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-700 text-white shrink-0">
                <Icon size={24} />
              </span>
              <p className="type-title font-bold text-sm uppercase mt-4!">{title}</p>
              <p className="mt-3! text-sm opacity-70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* closing note from the family, in the brand band */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-12 lg:py-16 text-center">
          <Quote size={28} className="mx-auto opacity-50" />
          <blockquote className="mt-4! text-lg lg:text-2xl italic max-w-2xl mx-auto!">
            &ldquo;From our family to yours—thank you for letting us be a part of your big moments!&rdquo;
          </blockquote>
          <p className="type-title mt-5! text-xs lg:text-sm font-bold tracking-widest text-white/80">
            The Kyro &amp; Bros Family
          </p>
        </div>
      </div>
    </section>
  )
}
