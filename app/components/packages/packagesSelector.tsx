import Link from 'next/link'
import { Check, Star } from 'lucide-react'

type Option = {
  title: string
  desc: string
  /* tags[0] is the headline feature and gets highlighted; the rest are supporting chips. */
  tags: string[]
  price: string | null
  priceNote?: string
  featured?: boolean
  cta: { label: string; href: string }
}

const options: Option[] = [
  {
    title: 'Individual Supplies',
    desc: 'Rent exactly what you need — balloons, tables, chairs, or tents — with no bundle required.',
    tags: ['Pay per item', 'No minimum', 'Mix & match'],
    price: '$15',
    priceNote: 'per item / day',
    cta: { label: 'Browse Items', href: '/contact' },
  },
  {
    title: 'Budget Friendly',
    desc: 'A compact bundle of the essentials, sized right for backyard birthdays and small gatherings.',
    tags: ['Best value', 'Up to 25 guests', 'Essentials'],
    price: '$49',
    priceNote: 'starting',
    cta: { label: 'Get Started', href: '/contact' },
  },
  {
    title: 'Event Packages',
    desc: 'All-in-one bundles sized to your guest count — rentals, delivery, and setup handled together.',
    tags: ['Delivery + setup', 'Sized to you', 'Most flexible'],
    price: '$199',
    priceNote: 'starting',
    featured: true,
    cta: { label: 'Book a Package', href: '/contact' },
  },
  {
    title: 'Premium All-Inclusive',
    desc: 'The full experience for big celebrations, with premium decor and a dedicated coordinator.',
    tags: ['Coordinator', '100+ guests', 'Premium decor'],
    price: '$499',
    priceNote: 'starting',
    cta: { label: 'Plan My Event', href: '/contact' },
  },
  {
    title: 'Subscription Plans',
    desc: 'Member pricing and priority booking for regular hosts, billed monthly with no commitment.',
    tags: ['Member pricing', 'Priority booking', 'Cancel anytime'],
    price: null,
    cta: { label: 'Learn More', href: '/contact' },
  },
  {
    title: 'Build Your Own',
    desc: "Tell us your theme, space, and budget, and we'll design a custom package around your event.",
    tags: ['Tailored to you', 'Any theme', 'Flexible budget'],
    price: null,
    cta: { label: 'Get a Quote', href: '/contact' },
  },
]

export default function PackagesSelector() {
  return (
    <section id="options" className="py-18 scroll-mt-20">
      <div className="container px-3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h2 className="title is-4 type-title lg:text-5xl! mb-0! uppercase">Flexible Options for Every Event</h2>
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          </div>
          <p className="mt-4 text-sm lg:text-base opacity-70 max-w-2xl mx-auto">
            From a single rental to a fully managed celebration, pick the option that fits your event and your budget. Not sure which is right? We&apos;ll help you choose.
          </p>
        </div>

        {/* base: stacked (flex) on mobile. Note: a bare `grid` class collides with
            Bulma's own `.grid` (loaded after Tailwind), so we only switch to grid at
            the sm/lg breakpoints, whose prefixed class names Bulma doesn't define. */}
        <div className="mt-12 flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {options.map(({ title, desc, tags, price, priceNote, featured, cta }) => {
            const accent = featured ? 'text-blue-700' : 'text-red-800'
            const [headline, ...rest] = tags
            return (
              <div
                key={title}
                className={`relative flex flex-col bg-background px-6 py-8 rounded-lg border transition-shadow hover:shadow-lg ${
                  featured ? 'border-blue-700 shadow-md' : 'border-blue-700/20'
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 type-title text-xs font-bold uppercase tracking-wide bg-blue-700 text-white rounded-full px-4 py-1 whitespace-nowrap">
                    <Star className="size-3 fill-current" />
                    Most Popular
                  </span>
                )}

                <h3 className="type-title font-bold text-base uppercase">{title}</h3>
                <p className="mt-3 text-sm opacity-70">{desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {/* headline feature: filled chip so the standout benefit reads first */}
                  <li
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white ${
                      featured ? 'bg-blue-700' : 'bg-red-800'
                    }`}
                  >
                    <Star className="size-3 shrink-0 fill-current" />
                    {headline}
                  </li>
                  {rest.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-700/20 px-3 py-1 text-xs"
                    >
                      <Check className="size-3 shrink-0 text-red-800" />
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  {price ? (
                    <p className="type-title text-xs font-bold uppercase tracking-wide opacity-60">
                      {priceNote === 'starting' ? 'Starting at' : 'From'}
                    </p>
                  ) : (
                    <p className="type-title text-xs font-bold uppercase tracking-wide opacity-60">
                      Pricing
                    </p>
                  )}
                  <p className={`type-title font-bold leading-none ${accent} ${price ? 'text-3xl' : 'text-xl'}`}>
                    {price ?? 'Custom'}
                    {price && priceNote && priceNote !== 'starting' && (
                      <span className="ml-1 text-xs font-normal opacity-60">{priceNote}</span>
                    )}
                  </p>
                  <Link
                    href={cta.href}
                    className={`button is-fullwidth mt-4 ${featured ? 'is-link' : 'is-danger is-outlined'}`}
                  >
                    {cta.label}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm opacity-60">
          All packages include free delivery within the Houston area.{' '}
          <Link href="/contact" className="text-red-800 font-bold hover:underline">
            Contact us
          </Link>{' '}
          for a custom quote.
        </p>
      </div>
    </section>
  )
}
