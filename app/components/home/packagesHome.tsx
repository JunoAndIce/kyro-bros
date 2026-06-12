'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import balloons from '@/public/merchandise/balloons-transparent.webp'
import table from '@/public/merchandise/tables.webp'
import tent from '@/public/merchandise/tents.webp'
import chair from '@/public/merchandise/chair.webp'
import lawn from '@/public/merchandise/lawn.webp'

const packages = [
  {
    image: balloons,
    title: 'Balloons',
    desc: 'Add color and excitement to any celebration.',
    stock: ['Balloon arches & columns', 'Number & letter balloons', 'Custom color garlands'],
  },
  {
    image: table,
    title: 'Tables',
    desc: 'Sturdy, stylish tables for guests of every size.',
    stock: ['6 ft banquet tables', 'Round tables (seats 8)', 'Cocktail & kids tables'],
  },
  {
    image: tent,
    title: 'Tents',
    desc: 'Reliable shelter and shade for indoor or outdoor events.',
    stock: ['10×10 pop-up canopies', '20×20 frame tents', 'Sidewalls & weights'],
  },
  {
    image: chair,
    title: 'Chairs',
    desc: 'Comfortable seating for any size gathering.',
    stock: ['White folding chairs', 'Padded banquet chairs', 'Kid-sized chairs'],
  },
  {
    image: lawn,
    title: 'Lawn Decor',
    desc: 'Decorative touches that transform your outdoor space.',
    stock: ['Yard letters & signs', 'Balloon yard stakes', 'Themed lawn displays'],
  },
]

export default function PackagesHome() {
  const [active, setActive] = useState(0)
  const selected = packages[active]

  return (
    <main className="py-18">
      <div className="container px-3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h2 className="title is-4 type-title lg:text-6xl! mb-0! uppercase">Ready to Elevate Your Event?</h2>
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          </div>
          <p className="mt-3 text-sm opacity-70 max-w-xl mx-auto">
            Pick a category to see what we keep in stock for your next unforgettable occasion.
          </p>
        </div>

        {/* mobile/tablet selector: horizontally scrollable pills */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {packages.map(({ title }, i) => (
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

        <div className="mt-6 lg:mt-36 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start">
 
          <div className="hidden lg:flex lg:flex-col lg:col-span-5">
            {packages.map(({ title, desc }, i) => (
              <button
                key={title}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`group flex items-center justify-between gap-4 rounded border-2 px-5 py-5 text-left transition-colors ${
                  i === active
                    ? 'outline-2 outline-red-800 bg-red-800/5'
                    : 'border-transparent hover:bg-foreground/5'
                }`}
              >
                <span
                  className={`min-w-0 transition-opacity ${
                    i === active ? '' : 'opacity-40 group-hover:opacity-70'
                  }`}
                >
                  <span className={`type-title block text-sm font-bold uppercase ${i === active ? 'text-red-800' : ''}`}>
                    {title}
                  </span>
                  <span className="mt-1 block text-xs opacity-60">{desc}</span>
                </span>
                <ArrowRight
                  className={`size-4 shrink-0 transition-all ${
                    i === active
                      ? 'text-red-800 opacity-100'
                      : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-40'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* preview: crossfading image + in-stock details for the selected category */}
          <div className="lg:col-span-7">
            <div className="relative aspect-3/2 lg:aspect-16/10 overflow-hidden rounded">
              {packages.map(({ image, title }, i) => (
                <Image
                  key={title}
                  src={image}
                  alt={`${title} rentals`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div key={selected.title} className="fade-up mt-5">
              <p className="type-title text-xs font-bold uppercase tracking-wide text-red-800">In stock now</p>
              <h3 className="type-title mt-1 text-lg font-bold uppercase">{selected.title}</h3>
              <p className="mt-1 text-sm opacity-70">{selected.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {selected.stock.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-700/20 px-3 py-1.5 text-xs"
                  >
                    <Check className="size-3 shrink-0 text-red-800" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-18 text-center">
          <button className="button is-danger is-outlined is-responsive is-large">Find What&apos;s Right for You</button>
        </div>
      </div>
    </main>
  )
}
