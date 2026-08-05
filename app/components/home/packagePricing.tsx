import Link from 'next/link'

/* Mirrors the package cards on /packages — base rates are for a 1-day rental. */
const items = [
  {
    title: 'Package C — Essential Pop-Up',
    desc: "One 10'×10' pop-up tent, a banquet table, and 10 chairs. Right for cake tables, buffet stations, and vendor booths.",
    price: '$110',
    featured: false,
  },
  {
    title: 'Package B — Shade & Seating',
    desc: "Two 10'×10' pop-up tents, 3 banquet tables, and 30 chairs. Built for backyard parties and graduations.",
    price: '$250',
    featured: true,
  },
  {
    title: 'Package A — The Main Event',
    desc: "Our 30'×30' tent with all 6 banquet tables and all 60 chairs. For weddings, reunions, and corporate events.",
    price: '$750',
    featured: false,
  },
]

export default function PackagePricing() {
  return (
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
                  Mid-Size
                </span>
              )}
              <p className="type-title font-bold text-sm uppercase">{title}</p>
              <p className="mt-3 text-sm opacity-70">{desc}</p>
              <div className="mt-auto pt-6">
                <p className={`type-title text-xs font-bold uppercase tracking-wide ${featured ? 'text-blue-700' : 'text-red-800'}`}>
                  1-day rate
                </p>
                <p className={`type-title text-3xl font-bold ${featured ? 'text-blue-700' : 'text-red-800'}`}>{price}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm opacity-60">
          Sidewalls included on every tent. Delivery, setup, and the $75 agency fee are added at quote —{' '}
          <Link href="/packages" className="text-red-800 font-bold hover:underline">
            see the full rate card
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
