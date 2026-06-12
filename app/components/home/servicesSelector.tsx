'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faTruckFast,
  faScrewdriverWrench,
  faUsers,
  faClock,
  faLocationDot,
  faBoxOpen,
  faRulerCombined,
  faCalendarCheck,
  faHeadset,
  faListCheck,
  faHandshakeAngle,
  faImage,
} from '@fortawesome/free-solid-svg-icons'
import confetti from '@/public/confetti.webp'

// we ship FA's css ourselves (imported above) so it must not inject a duplicate at runtime
config.autoAddCss = false

const services = [
  {
    icon: faTruckFast,
    title: 'Delivery',
    blurb: 'On time, every time.',
    desc: 'We bring your rentals straight to your door — home, venue, park, or office. Our team schedules every delivery around your event timeline and confirms each drop-off in advance. When the party is over, pickup is just as easy: we haul everything away for you.',
    tags: [
      { icon: faClock, label: 'On-time windows' },
      { icon: faLocationDot, label: 'Houston-wide' },
      { icon: faBoxOpen, label: 'Careful handling' },
    ],
    cta: { label: 'Schedule Delivery', href: '/bookings' },
  },
  {
    icon: faScrewdriverWrench,
    title: 'Setup & Takedown',
    blurb: "We handle the hard work so you don't have to.",
    desc: 'Skip the heavy lifting. Our crew assembles tents, tables, chairs, and decor exactly where you want them, following your layout down to the last chair. After the event, we break everything down and leave the space the way we found it.',
    tags: [
      { icon: faScrewdriverWrench, label: 'Full assembly' },
      { icon: faRulerCombined, label: 'Your floor plan' },
      { icon: faCalendarCheck, label: 'Same-day takedown' },
    ],
    cta: { label: 'Book Our Crew', href: '/bookings' },
  },
  {
    icon: faUsers,
    title: 'Event Support',
    blurb: "We're here to make your event a success.",
    desc: "Questions before the big day? Need an extra set of hands while the party is running? We stay on call from planning through cleanup, so small surprises never turn into big problems. Think of us as part of your event crew.",
    tags: [
      { icon: faHeadset, label: 'On-call team' },
      { icon: faListCheck, label: 'Planning help' },
      { icon: faHandshakeAngle, label: 'Day-of assistance' },
    ],
    cta: { label: 'Talk to Us', href: '/contact' },
  },
]

export default function ServicesSelector() {
  const [active, setActive] = useState(0)
  const selected = services[active]

  return (
    <section className="pb-18">
      {/* red banner title band */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-14 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
            <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-white/80">Kyro &amp; Bros</p>
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
          </div>
          <h2 className="title is-2 type-title has-text-white font-black! text-4xl! lg:text-6xl! mt-3 mb-0!">
            Explore Our Services
          </h2>
          <p className="mt-4 text-sm lg:text-base text-white/85 max-w-xl mx-auto">
            Find the perfect solution for your next event.
          </p>
        </div>
      </div>

      <div className="container px-3">
        {/* mobile/tablet selector: horizontally scrollable pills */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {services.map(({ title }, i) => (
            <button
              key={title}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`mt-3 mx-3 type-title shrink-0 rounded-full border px-3 py-3 text-xs font-bold uppercase transition-colors ${
                i === active
                  ? 'outline-2 outline-red-800 text-white'
                  : 'opacity-20'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="mt-6 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start">

          <div className="hidden lg:flex lg:flex-col lg:col-span-5">
            {services.map(({ icon, title, blurb }, i) => (
              <button
                key={title}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`group flex items-center gap-4 rounded border-2 px-5 py-5 text-left transition-colors ${
                  i === active
                    ? 'outline-2 outline-red-800 bg-red-800/5'
                    : 'border-transparent hover:bg-foreground/5'
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white shrink-0 transition-colors ${
                    i === active ? 'bg-red-800' : 'bg-blue-700'
                  }`}
                >
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span
                  className={`min-w-0 flex-1 transition-opacity ${
                    i === active ? '' : 'opacity-40 group-hover:opacity-70'
                  }`}
                >
                  <span className={`type-title block text-sm font-bold uppercase ${i === active ? 'text-red-800' : ''} mb-0`}>
                    {title}
                  </span>
                  <span className="mt-1 block text-xs opacity-60">{blurb}</span>
                </span>
              </button>
            ))}
          </div>

          {/* preview: image placeholder + details for the selected service */}
          <div className="lg:col-span-7">
            {/* placeholder until service photos are ready */}
            <div className="relative aspect-3/2 lg:aspect-16/10 overflow-hidden rounded border-2 border-dashed border-blue-700/20 bg-foreground/5 flex items-center justify-center">
              <div className="text-center opacity-40">
                <FontAwesomeIcon icon={faImage} className="text-3xl" />
                <p className="type-title mt-2 text-xs font-bold tracking-wide">Image coming soon</p>
              </div>
            </div>

            <div key={selected.title} className="fade-up mt-5">
              <h3 className="type-title text-lg font-bold uppercase">{selected.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {selected.tags.map(({ icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-700/20 px-3 py-1.5 text-xs"
                  >
                    <FontAwesomeIcon icon={icon} className="text-red-800" />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm opacity-70 max-w-prose">{selected.desc}</p>
              <div className="mt-5">
                <Link href={selected.cta.href} className="button is-danger is-responsive">
                  {selected.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
