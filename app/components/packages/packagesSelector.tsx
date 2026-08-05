import Link from 'next/link'
import { Check, Star, Users, ShieldCheck, Info } from 'lucide-react'

type Pkg = {
  code: string
  title: string
  desc: string
  includes: string[]
  capacity: string
  /* Base rate for a 1-day (24-hour) rental. Longer rentals scale by `durations`. */
  price: string
  badge?: string
  featured?: boolean
}

/* Our entire inventory is 1× 30'×30' tent, 3× 10'×10' pop-ups, 6 banquet tables,
   and 60 folding chairs — the packages and the à la carte caps below both come
   straight off those counts. */
const packages: Pkg[] = [
  {
    code: 'Package C',
    title: 'Essential Pop-Up',
    desc: 'Sized for small gatherings, cake and buffet stations, or a single vendor booth.',
    includes: ["1× 10'×10' pop-up tent", '1× banquet table', '10× folding chairs'],
    capacity: 'Up to 10 seated guests',
    price: '$110',
  },
  {
    code: 'Package B',
    title: 'Mid-Size Shade & Seating',
    desc: 'Built for medium backyard parties and graduation events.',
    includes: ["2× 10'×10' pop-up tents", '3× banquet tables', '30× folding chairs'],
    capacity: 'Up to 30 seated guests',
    price: '$250',
  },
  {
    code: 'Package A',
    title: 'The Main Event',
    desc: 'Our big tent with every table and chair we own — for weddings, large family reunions, and corporate gatherings.',
    includes: ["1× 30'×30' frame tent", '6× banquet tables', '60× folding chairs'],
    capacity: 'Up to 60 seated guests',
    price: '$750',
    badge: 'Largest Package',
    featured: true,
  },
]

const alaCarte = [
  { item: "30'×30' tent", price: '$550.00', unit: 'per rental', note: 'Sidewalls included', stock: '1' },
  { item: "10'×10' pop-up tent", price: '$75.00', unit: 'per rental', note: 'Sidewalls included', stock: '3' },
  { item: 'Banquet table', price: '$12.00', unit: 'each', note: '6 ft / 8 ft standard', stock: '6' },
  { item: 'Folding chair', price: '$2.50', unit: 'each', note: 'Poly folding chair', stock: '60' },
]

const durations = [
  { label: '1 day (standard event)', rate: '1.0×', note: 'Base rate' },
  { label: 'Weekend — Friday delivery to Monday pickup', rate: '1.5×', note: 'Best value for weekend events' },
  { label: '3–4 days', rate: '2.0×', note: 'Mid-week or multi-day event' },
  { label: 'Full week (7 days)', rate: '2.5×', note: 'Extended event rate' },
]

const fees = [
  {
    icon: Info,
    label: 'Agency fee',
    amount: '$75.00 flat',
    desc: 'Applied to every booking. Covers administrative handling, contract processing, insurance, and reserving your order.',
  },
  {
    icon: ShieldCheck,
    label: 'Damage waiver',
    amount: '8% of rental subtotal',
    desc: 'Optional and checked by default. Calculated on the rental subtotal after the duration multiplier, and covers accidental minor wear and tear — not loss or negligence.',
  },
]

export default function PackagesSelector() {
  return (
    <section id="options" className="py-18 scroll-mt-20">
      <div className="container px-3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h2 className="title is-4 type-title lg:text-5xl! mb-0! uppercase">Three Packages, Every Rate Listed</h2>
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          </div>
          <p className="mt-4 text-sm lg:text-base opacity-70 max-w-2xl mx-auto">
            Every package is a tent, table, and chair bundle priced for a 1-day rental — and every tent ships with full
            matching sidewalls at no extra charge. Need a different mix? Build your own from the à la carte rates below.
          </p>
        </div>

        {/* base: stacked (flex) on mobile. Note: a bare `grid` class collides with
            Bulma's own `.grid` (loaded after Tailwind), so we only switch to grid at
            the sm/lg breakpoints, whose prefixed class names Bulma doesn't define. */}
        <div className="mt-12 flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(({ code, title, desc, includes, capacity, price, badge, featured }) => {
            const accent = featured ? 'text-blue-700' : 'text-red-800'
            return (
              <div
                key={code}
                className={`relative flex flex-col bg-background px-6 py-8 rounded-lg border transition-shadow hover:shadow-lg ${
                  featured ? 'border-blue-700 shadow-md' : 'border-blue-700/20'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 type-title text-xs font-bold uppercase tracking-wide bg-blue-700 text-white rounded-full px-4 py-1 whitespace-nowrap">
                    <Star className="size-3 fill-current" />
                    {badge}
                  </span>
                )}

                <p className={`type-title text-xs font-bold uppercase tracking-widest ${accent}`}>{code}</p>
                <h3 className="type-title mt-1 font-bold text-base uppercase">{title}</h3>
                <p className="mt-3 text-sm opacity-70">{desc}</p>

                <ul className="mt-5 space-y-2">
                  {includes.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm">
                      <Check className="size-4 mt-0.5 shrink-0 text-red-800" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white ${
                      featured ? 'bg-blue-700' : 'bg-red-800'
                    }`}
                  >
                    <Users className="size-3 shrink-0" />
                    {capacity}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-700/20 px-3 py-1 text-xs">
                    <Check className="size-3 shrink-0 text-red-800" />
                    Sidewalls included
                  </span>
                </div>

                <div className="mt-auto pt-6">
                  <p className="type-title text-xs font-bold uppercase tracking-wide opacity-60">1-day base rate</p>
                  <p className={`type-title font-bold leading-none text-3xl ${accent}`}>
                    {price}
                    <span className="ml-1.5 text-xs font-normal opacity-60">/ 24 hours</span>
                  </p>
                  <Link
                    href="/contact"
                    className={`button is-fullwidth mt-4 ${featured ? 'is-link' : 'is-danger is-outlined'}`}
                  >
                    Request This Package
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* à la carte */}
        <div className="mt-18">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h3 className="type-title text-lg lg:text-2xl font-bold uppercase">À La Carte Rentals</h3>
          </div>
          <p className="mt-3 text-sm opacity-70 max-w-2xl">
            Rent individual items or top up a package. Availability columns are hard caps — that is everything we carry.
          </p>

          {/* Bulma is loaded unlayered after Tailwind, so its `td,th{padding:0}` and
              `table td{vertical-align:top}` outrank our layered utilities — hence the `!`. */}
          <div className="mt-6 overflow-x-auto rounded-lg border border-blue-700/20">
            <table className="w-full min-w-lg text-left text-sm">
              <thead>
                <tr className="border-b border-blue-700/20 bg-foreground/5">
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">Item</th>
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">1-day base price</th>
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">Notes</th>
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">In stock</th>
                </tr>
              </thead>
              <tbody>
                {alaCarte.map(({ item, price, unit, note, stock }) => (
                  <tr key={item} className="border-b border-blue-700/10 last:border-0">
                    <td className="px-4! py-3! align-middle! font-bold">{item}</td>
                    <td className="px-4! py-3! align-middle!">
                      <span className="type-title font-bold text-red-800">{price}</span>
                      <span className="ml-1.5 text-xs opacity-60">{unit}</span>
                    </td>
                    <td className="px-4! py-3! align-middle! opacity-70">{note}</td>
                    <td className="px-4! py-3! align-middle! opacity-70">{stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm opacity-70">
            <span className="font-bold">$110.00 minimum order subtotal</span>, calculated before the agency fee and
            delivery. Every package above clears it.
          </p>
        </div>

        {/* duration multipliers */}
        <div className="mt-18">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h3 className="type-title text-lg lg:text-2xl font-bold uppercase">Keeping It Longer</h3>
          </div>
          <p className="mt-3 text-sm opacity-70 max-w-2xl">
            Package and à la carte prices are 1-day rates. Multi-day rentals multiply the inventory cost — fees and
            delivery are still charged once.
          </p>

          <div className="mt-6 overflow-x-auto rounded-lg border border-blue-700/20">
            <table className="w-full min-w-lg text-left text-sm">
              <thead>
                <tr className="border-b border-blue-700/20 bg-foreground/5">
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">Rental duration</th>
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">Rate</th>
                  <th className="type-title px-4! py-3! text-xs font-bold uppercase tracking-wide">Notes</th>
                </tr>
              </thead>
              <tbody>
                {durations.map(({ label, rate, note }) => (
                  <tr key={label} className="border-b border-blue-700/10 last:border-0">
                    <td className="px-4! py-3! align-middle! font-bold">{label}</td>
                    <td className="type-title px-4! py-3! align-middle! font-bold text-red-800">{rate}</td>
                    <td className="px-4! py-3! align-middle! opacity-70">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* fees + quote formula */}
        <div className="mt-18">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h3 className="type-title text-lg lg:text-2xl font-bold uppercase">Included with your quote</h3>
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:grid sm:grid-cols-2">
            {fees.map(({ icon: Icon, label, amount, desc }) => (
              <div key={label} className="bg-background px-6 py-6 rounded-lg border border-blue-700/20">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-blue-700 text-white">
                  <Icon className="size-5" />
                </span>
                <p className="type-title mt-4 text-sm font-bold uppercase">{label}</p>
                <p className="type-title text-2xl font-bold text-red-800 leading-none mt-1">{amount}</p>
                <p className="mt-3 text-sm opacity-70">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-dashed border-blue-700/30 bg-foreground/5 px-6 py-5">
            <p className="type-title text-xs font-bold uppercase tracking-wide opacity-60">The math</p>
            <p className="mt-2 font-mono text-xs sm:text-sm leading-relaxed">
              (package or à la carte total × duration multiplier) + $75 agency fee + delivery fee + add-ons + damage
              waiver = your total quote
            </p>
            <p className="mt-3 text-xs opacity-60">
              The multiplier applies to inventory only — the agency fee, delivery, and add-ons are each charged once, no
              matter how long you keep the order.
            </p>
          </div>

          <p className="mt-10 text-center text-sm opacity-60">
            Delivery is priced by distance, with setup and tent add-ons available on top.{' '}
            <Link href="/services" className="text-red-800 font-bold hover:underline">
              See delivery zones &amp; services
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-red-800 font-bold hover:underline">
              request a quote
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
