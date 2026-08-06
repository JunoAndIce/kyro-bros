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
  faLightbulb,
  faStopwatch,
  faFileContract,
  faClock,
  faLocationDot,
  faBoxOpen,
  faRulerCombined,
  faCalendarCheck,
  faAnchor,
  faShieldHalved,
  faStairs,
  faMoon,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import confetti from '@/public/confetti.webp'
import deliveryImg from '@/public/delivery.webp'
import setupImg from '@/public/setup.webp'
import tentAddonImg from '@/public/tent-addon.webp'
import scheduleImg from '@/public/schedule.webp'
import bookingImg from '@/public/booking.webp'
import {
  DELIVERY,
  SETUP,
  ADD_ONS,
  SURCHARGES,
  FEES,
  damageWaiverPct,
  usd,
  usdExact,
} from '@/app/lib/pricing'

// we ship FA's css ourselves (imported above) so it must not inject a duplicate at runtime
config.autoAddCss = false

const services = [
  {
    icon: faTruckFast,
    title: 'Delivery & Pickup',
    blurb: 'Flat-rate zones from our Houston HQ.',
    image: deliveryImg,
    imageAlt: 'A delivery truck on the highway',
    desc: 'We bring your rentals straight to your event — home, venue, park, or office — and haul everything away when it is over. Delivery is priced by how far your address sits from our Houston HQ, and drop-off with everything neatly stacked is included in that fee.',
    rates: [
      { label: DELIVERY.zone1.label, price: `${usdExact(DELIVERY.zone1.price)} flat` },
      { label: DELIVERY.zone2.label, price: `${usdExact(DELIVERY.zone2.price)} flat` },
      {
        label: DELIVERY.zone3.label,
        price: `${usdExact(DELIVERY.zone3.price)} + ${usdExact(DELIVERY.zone3.perExtraMile)} / extra mile`,
      },
    ],
    tags: [
      { icon: faLocationDot, label: 'Houston-wide' },
      { icon: faBoxOpen, label: 'Stacked drop-off included' },
      { icon: faClock, label: 'Scheduled around your event' },
    ],
    cta: { label: 'Schedule Delivery', href: '/contact' },
  },
  {
    icon: faScrewdriverWrench,
    title: 'Setup & Teardown',
    blurb: 'Let the crew place every chair.',
    image: setupImg,
    imageAlt: 'A white frame tent set up with draped tables, chairs, and bunting for an outdoor ceremony',
    desc: 'Stacked drop-off comes standard at no extra cost. Add the labor service and our crew sets out your tables and chairs exactly where you want them, following your layout down to the last seat — then breaks it all down after the event.',
    rates: [
      { label: 'Full setup & teardown — chairs', price: `+${usdExact(SETUP.chair)} per chair` },
      { label: 'Full setup & teardown — tables', price: `+${usdExact(SETUP.table)} per table` },
    ],
    tags: [
      { icon: faRulerCombined, label: 'Your floor plan' },
      { icon: faCalendarCheck, label: 'Teardown handled' },
      { icon: faBoxOpen, label: 'Optional add-on' },
    ],
    cta: { label: 'Add Setup Service', href: '/contact' },
  },
  {
    icon: faLightbulb,
    title: 'Tent Add-Ons',
    blurb: 'Lighting and anchoring for any tent.',
    image: tentAddonImg,
    imageAlt: 'Pop-up canopy tents over long dining tables, strung with coloured globe lights',
    desc: 'String and globe lighting turns a daytime tent into an evening venue. When your ground will not take stakes — pavement, patios, or protected turf — we anchor with concrete or water barrel weights instead. Full matching sidewalls, solid or windowed, come with every tent at no extra charge.',
    rates: [
      { label: "String / globe lighting — 10'×10' tent", price: `+${usdExact(ADD_ONS.lighting10)}` },
      { label: "String / globe lighting — 30'×30' tent", price: `+${usdExact(ADD_ONS.lighting30)}` },
      { label: 'Anchoring weights — concrete or water barrel', price: `+${usdExact(ADD_ONS.anchorPerLeg)} per leg` },
    ],
    tags: [
      { icon: faShieldHalved, label: 'Sidewalls always included' },
      { icon: faAnchor, label: 'No staking required' },
      { icon: faLightbulb, label: 'Evening-ready' },
    ],
    cta: { label: 'Add Lighting', href: '/contact' },
  },
  {
    icon: faStopwatch,
    title: 'Scheduling & Access',
    blurb: 'For tight windows and tricky sites.',
    image: scheduleImg,
    imageAlt: 'Two people in business attire talking inside an event venue',
    desc: 'Some venues are harder to load into than others, and some events run late. These surcharges cover the extra crew time so we can commit to your site and your clock — tell us about stairs, long carries, or a hard pickup time when you book.',
    rates: [
      { label: 'Stairs, elevators, or carry over 50 ft', price: `+${usdExact(SURCHARGES.longCarry)}` },
      { label: 'After-hours pickup — after 9:00 PM', price: `+${usdExact(SURCHARGES.afterHours)}` },
      { label: 'Guaranteed 2-hour delivery window', price: `+${usdExact(SURCHARGES.exactWindow)}` },
    ],
    tags: [
      { icon: faStairs, label: 'Long-carry sites' },
      { icon: faMoon, label: 'Late-night pickup' },
      { icon: faClock, label: 'Exact time window' },
    ],
    cta: { label: 'Discuss Your Site', href: '/contact' },
  },
  {
    icon: faFileContract,
    title: 'Booking & Protection',
    blurb: 'One flat fee, one optional waiver.',
    image: bookingImg,
    imageAlt: 'Two people shaking hands over a completed agreement',
    desc: `A single agency fee applies to every booking — it covers administrative handling, contract processing, insurance, and holding your inventory off the calendar. The damage waiver is optional and checked by default: it covers accidental minor wear and tear, but not loss or negligence. Orders start at a ${usd(FEES.minimumOrder)} subtotal, counted before the agency fee and delivery.`,
    rates: [
      { label: 'Agency fee — all bookings', price: `${usdExact(FEES.agency)} flat` },
      { label: 'Damage waiver — optional', price: `${damageWaiverPct} of rental subtotal` },
      { label: 'Minimum order subtotal', price: usdExact(FEES.minimumOrder) },
    ],
    tags: [
      { icon: faFileContract, label: 'Contract & insurance' },
      { icon: faCalendarCheck, label: 'Order reserved' },
      { icon: faTag, label: 'Waiver is optional' },
    ],
    cta: { label: 'Start a Booking', href: '/contact' },
  },
]

export default function ServicesSelector() {
  const [active, setActive] = useState(0)
  const selected = services[active]

  return (
    <section className="pb-18">
      {/* red banner title band */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-21 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
            <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-white/80">Kyro &amp; Bros</p>
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
          </div>
          <h2 className="title is-2 type-title has-text-white font-black! text-4xl! lg:text-6xl! mt-3 mb-0!">
            Explore Our Services
          </h2>
          <p className="mt-4 text-sm lg:text-base text-white/85 max-w-xl mx-auto">
            Every fee, spelled out before you book.
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

          {/* preview: photo + details for the selected service */}
          <div className="lg:col-span-7">
            {/* All five stay mounted and crossfade on opacity, which avoids a
                layout shift when switching tabs. The inactive ones are hidden
                from assistive tech so their alt text isn't announced too. */}
            <div className="relative aspect-3/2 lg:aspect-16/10 overflow-hidden rounded">
              {services.map(({ title, image, imageAlt }, i) => (
                <Image
                  key={title}
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  aria-hidden={i !== active}
                  className={`object-cover transition-opacity duration-500 ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
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

              {/* priced line items for the selected service */}
              <ul className="mt-5 rounded-lg border border-blue-700/20 divide-y divide-blue-700/10">
                {selected.rates.map(({ label, price }) => (
                  <li key={label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3">
                    <span className="text-sm">{label}</span>
                    <span className="type-title text-sm font-bold text-red-800 whitespace-nowrap">{price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link href={selected.cta.href} className="button is-danger is-responsive">
                  {selected.cta.label}
                </Link>
                <Link href="/packages" className="text-sm text-red-800 font-bold hover:underline">
                  See package rates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
