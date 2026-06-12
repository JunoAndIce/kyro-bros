'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import balloons from '@/public/merchandise/balloons.webp'
import tables from '@/public/merchandise/tables.webp'
import tents from '@/public/merchandise/tents.webp'
import lawn from '@/public/merchandise/lawn.webp'
import chair from '@/public/merchandise/chair.webp'

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
    desc: 'Hosting events regularly? Our monthly plans keep tables, chairs, and decor on standby — with member pricing and priority booking.',
    cta: { label: 'Explore Plans', href: '/products' },
    image: balloons,
    imageAlt: 'Colorful balloon arrangement for an event',
  },
  {
    eyebrow: 'Individual Supplies',
    accent: 'Buy What You Need,',
    rest: "Skip What You Don't",
    desc: 'Balloons, decorations, tableware, and more — purchase party supplies individually, no bundle required.',
    cta: { label: 'Shop Supplies', href: '/products' },
    image: tables,
    imageAlt: 'Tables dressed and ready for a party',
  },
  {
    eyebrow: 'Setup & Teardown',
    accent: 'We Set Up,',
    rest: 'You Celebrate',
    desc: 'Our crew delivers, builds, and breaks down your event — tents, tables, chairs, and all — so you never lift a finger.',
    cta: { label: 'Book Our Crew', href: '/bookings' },
    image: tents,
    imageAlt: 'Event tent assembled on a lawn',
  },
  {
    eyebrow: 'Delivery & Pickup',
    accent: 'On Time,',
    rest: 'Every Time',
    desc: 'Reliable delivery and pickup across the Houston area, scheduled around your event — not the other way around.',
    cta: { label: 'Schedule Delivery', href: '/bookings' },
    image: lawn,
    imageAlt: 'Lawn games delivered for an outdoor event',
  },
  {
    eyebrow: 'Event Packages',
    accent: 'One Booking,',
    rest: 'Everything Included',
    desc: 'Curated packages sized to your guest count — rentals, delivery, and setup bundled together to save you time and money.',
    cta: { label: 'View Packages', href: '/products' },
    image: chair,
    imageAlt: 'Rows of folding chairs arranged for an event',
  },
]

export default function ServicesHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)

  const go = (i: number) => setActive((i + slides.length) % slides.length)

  // Pseudocode: advance to the next slide on a timer; restarting whenever `active`
  // changes means a manual jump also gets a full interval before auto-advancing.
  // Skipped entirely while hovered or when the user prefers reduced motion.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive(a => (a + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, active])

  return (
    <section
      className="hero h-screen hero-bg"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our services"
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
            <Image src={s.image} alt={s.imageAlt} fill className="hero-bg-img" priority={i === 0} />
          </div>
          {/* mobile: fade from bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-background to-transparent z-1 lg:hidden" />
          {/* desktop: fade from left */}
          <div className="absolute inset-y-0 left-3/5 w-[85%] bg-linear-to-r from-background to-transparent z-1 hidden lg:block" />
          <div className="hero-content mt-auto lg:my-auto px-3 pb-20 lg:pb-6">
            <div className="container">
              <div className="columns">
                <div className="column is-9-desktop">
                  <p className="type-title font-bold text-xs lg:text-sm tracking-widest text-blue-700">{s.eyebrow}</p>
                  <h2 className="title is-1 text-4xl! lg:text-7xl! mt-2">
                    <span className="type-title font-black! text-red-800">{s.accent}</span><br />
                    <span className="type-title font-black!">{s.rest}</span>
                  </h2>
                  <p className="subtitle mt-3 is-6 type-title text-sm! lg:text-xl!">{s.desc}</p>
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
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === active ? 'w-8 bg-red-800' : 'w-2 bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
