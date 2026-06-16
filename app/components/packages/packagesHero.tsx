'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import balloons from '@/public/merchandise/balloons.webp'
import tables from '@/public/merchandise/tables.webp'
import tents from '@/public/merchandise/tents.webp'
import chair from '@/public/merchandise/chair.webp'
import lawn from '@/public/merchandise/lawn.webp'

type Slide = {
  eyebrow: string
  accent: string
  rest: string
  desc: string
  cta: { label: string; href: string }
  image: StaticImageData
  imageAlt: string
}

const ROTATE_MS = 6500

const slides: Slide[] = [
  {
    eyebrow: 'Subscription Plans',
    accent: 'Party All Year,',
    rest: 'One Simple Plan',
    desc: 'Hosting events on the regular? Our monthly plans keep tables, chairs, and decor on standby — with member pricing and priority booking every time.',
    cta: { label: 'See Plans', href: '#options' },
    image: balloons,
    imageAlt: 'Colorful balloon arrangement for an event',
  },
  {
    eyebrow: 'Individual Supplies',
    accent: 'Buy What You Need,',
    rest: "Skip What You Don't",
    desc: 'Balloons, tables, chairs, tents, and decor — rent items individually with no bundle required. Perfect for filling the gaps in a party you already have planned.',
    cta: { label: 'Shop À La Carte', href: '#options' },
    image: tables,
    imageAlt: 'Tables dressed and ready for a party',
  },
  {
    eyebrow: 'Budget-Friendly Packages',
    accent: 'Big Celebrations,',
    rest: 'Small Price Tag',
    desc: 'Affordable bundles of the essentials that never cut corners on quality. Ideal for backyard birthdays, small gatherings, and intimate get-togethers.',
    cta: { label: 'View Budget Picks', href: '#options' },
    image: chair,
    imageAlt: 'Folding chairs arranged for a small gathering',
  },
  {
    eyebrow: 'Event Packages',
    accent: 'One Booking,',
    rest: 'Everything Included',
    desc: 'Curated packages sized to your guest count — rentals, delivery, and full setup bundled together so you book once and we handle the rest.',
    cta: { label: 'Explore Packages', href: '#options' },
    image: tents,
    imageAlt: 'Event tent assembled on a lawn',
  },
  {
    eyebrow: 'Build Your Own',
    accent: 'Your Vision,',
    rest: 'Your Package',
    desc: 'Have something specific in mind? Tell us your theme, space, and budget and we’ll build a custom package designed entirely around your event.',
    cta: { label: 'Start Customizing', href: '/contact' },
    image: lawn,
    imageAlt: 'Decorated outdoor event space on a lawn',
  },
]

export default function PackagesHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)

  const go = (i: number) => setActive((i + slides.length) % slides.length)

  // Advance to the next slide on a timer; restarting whenever `active` changes
  // means a manual jump also gets a full interval before auto-advancing.
  // Skipped entirely while hovered or when the user prefers reduced motion.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive(a => (a + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, active])

  return (
    <section
      className="hero h-[50vh] min-h-105 hero-bg"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our packages"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={e => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={e => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 48) go(active + (dx < 0 ? 1 : -1))
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.eyebrow}
          className={`absolute inset-0 flex flex-col transition-opacity duration-700 ${
            i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={i !== active}
          inert={i !== active}
        >
          <div className="absolute inset-0 lg:left-3/5 lg:w-2/5">
            <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="hero-bg-img" priority={i === 0} />
          </div>
          {/* mobile: fade from bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[225%] bg-linear-to-t from-background to-transparent z-1 lg:hidden" />
          {/* desktop: fade from left */}
          <div className="absolute inset-y-0 left-3/5 w-[85%] bg-linear-to-r from-background to-transparent z-1 hidden lg:block" />
          <div className="hero-content mt-auto lg:my-auto px-3 pb-16 lg:pb-6">
            <div className="container">
              <div className="columns">
                <div className="column is-9-desktop">
                  <p className="type-title font-bold text-xs lg:text-sm tracking-widest text-blue-700">{s.eyebrow}</p>
                  <h2 className="title is-1 text-3xl! lg:text-5xl! mt-2">
                    <span className="type-title font-black! text-red-800">{s.accent}</span><br />
                    <span className="type-title font-black!">{s.rest}</span>
                  </h2>
                  <p className="subtitle mt-3 is-6 type-title text-sm! lg:text-lg!">{s.desc}</p>
                  <div className="buttons mt-4">
                    <Link href={s.cta.href} className="button is-danger is-medium is-responsive">{s.cta.label}</Link>
                    <Link href="/contact" className="button is-link is-medium is-responsive">Get a Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => go(active - 1)}
        aria-label="Previous slide"
        className="hidden sm:inline-flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full border-2 border-red-800 text-red-800 bg-background/60 hover:bg-background transition-colors cursor-pointer"
      >
        <ChevronLeft size={26} />
      </button>
      <button
        onClick={() => go(active + 1)}
        aria-label="Next slide"
        className="hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full border-2 border-red-800 text-red-800 bg-background/60 hover:bg-background transition-colors cursor-pointer"
      >
        <ChevronRight size={26} />
      </button>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.eyebrow}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
            aria-current={i === active}
            className={`h-2! p-0! border-0! shadow-none! rounded-full transition-all! duration-300! cursor-pointer ${
              i === active ? 'w-8 bg-red-800!' : 'w-2 bg-foreground/30! hover:bg-foreground/50!'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
