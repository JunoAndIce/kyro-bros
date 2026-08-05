import Image from 'next/image'
import Link from 'next/link'
import { Store, HeartHandshake, PartyPopper } from 'lucide-react'
import lawn from '@/public/merchandise/lawn.webp'

/* Condensed from the About page — keep these in step with aboutValues.tsx */
const values = [
  {
    icon: Store,
    title: 'Community First',
    desc: 'Locally owned, and proud to support our neighbors.',
  },
  {
    icon: HeartHandshake,
    title: 'Family-Centered Service',
    desc: 'Upfront pricing, honest communication, equipment you can trust.',
  },
  {
    icon: PartyPopper,
    title: 'Focus on What Matters',
    desc: 'We handle the shelter and seating so you can enjoy your guests.',
  },
]

export default function AboutHome() {
  return (
    <section className="py-18">
      <div className="container px-3">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative aspect-3/2 lg:aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src={lawn}
              alt="A backyard celebration at dusk with string lights, banquet tables, and balloons"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* spacing lives on this flex parent, not on the text elements themselves */}
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <span className="h-0.5 w-8 bg-red-800 shrink-0" />
              <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-red-800">Our Story</p>
            </div>

            <h2 className="title is-3 type-title font-black! text-2xl! lg:text-4xl! mb-0!">
              Built on Family, Driven by Community
            </h2>

            <p className="text-sm lg:text-base opacity-75">
              Kyro &amp; Bros didn&apos;t start in a corporate office — it started in our own backyard. Coming from a
              large, close-knit family, our calendar was always full of reasons to gather, so we know firsthand how
              much planning goes into hosting a great event.
            </p>
            <p className="text-sm lg:text-base opacity-75">
              We bring that same care to your celebration: dependable, stress-free rentals from a local family that
              treats every client like one of our own.
            </p>

            <ul className="flex flex-col gap-3">
              {values.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-700 text-white shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0 mb-6!">
                    <p className="mb-0! type-title block text-sm font-bold uppercase">{title}</p>
                    <p className="mt-0.5 block text-sm opacity-70">{desc}</p>
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="button is-danger is-responsive">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
