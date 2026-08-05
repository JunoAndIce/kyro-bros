import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import confetti from '@/public/confetti.webp'

/* Every answer here is derived from the rate card — if a rate changes, this
   list changes with it. Deliberately omitted until the client confirms them:
   booking lead time, weather/cancellation policy, and deposit terms. */
const faqs = [
  {
    q: 'Do you deliver, and which areas do you cover?',
    a: 'We deliver across the Houston area, priced by distance from our HQ: $75 flat within 15 miles, $125 from 16 to 30 miles, and $125 plus $2.50 per mile beyond 30. That fee covers pickup after your event too, and everything arrives dropped off and neatly stacked at no extra charge.',
  },
  {
    q: 'How many guests can you seat?',
    a: 'Up to 60 seated guests — that is our full stock of 60 folding chairs and 6 banquet tables, which is exactly what Package A includes. Package B seats up to 30 and Package C up to 10.',
  },
  {
    q: 'Is setup and teardown included in my rental?',
    a: 'Stacked drop-off and pickup are included in your delivery fee. If you would rather not place anything yourself, add our labor service and the crew sets out and breaks down every piece to your layout — $1 per chair and $3 per table.',
  },
  {
    q: 'Do your tents come with sidewalls?',
    a: 'Yes, at no extra charge. Every tent rental includes full matching sidewalls, solid or windowed. There is no upcharge and no separate line on your quote.',
  },
  {
    q: 'How long is a standard rental, and can I keep it longer?',
    a: 'Base prices cover a 1-day, 24-hour rental. Longer bookings multiply the equipment cost: a Friday-to-Monday weekend is 1.5x, three to four days is 2.0x, and a full week is 2.5x. The multiplier applies to the equipment only — the agency fee, delivery, and any add-ons are each charged once, no matter how long you keep the order.',
  },
  {
    q: 'Is there a minimum order?',
    a: 'Yes — $110, counted before the agency fee and delivery. All three of our packages clear it, so the minimum really only comes into play when you are building a custom order item by item.',
  },
  {
    q: 'What else shows up on my quote?',
    a: 'A $75 agency fee applies to every booking and covers administrative handling, contract processing, insurance, and reserving your equipment. Delivery is added by zone. The 8% damage waiver is optional — it is checked by default and covers accidental minor wear and tear, though not loss or negligence.',
  },
  {
    q: 'What if we cannot stake into the ground?',
    a: 'Not a problem. Where staking is not an option — pavement, patios, or turf you would rather not puncture — we anchor with concrete or water barrel weights instead, at $20 per tent leg.',
  },
]

export default function ContactFaq() {
  return (
    <section>
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
            Let&apos;s Get Started
          </h2>
          <p className="mt-4 text-sm lg:text-base text-white/85 max-w-xl mx-auto">
            Ready to bring your vision to life? Contact us today to get started.
          </p>
        </div>
      </div>

      {/* short FAQ: native <details> so each question opens without any JS */}
      <div className="mx-auto max-w-3xl px-3 py-21">
        <div className="flex items-center justify-center gap-4">
          <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          <h2 className="title is-5 type-title mb-0! uppercase">Common Questions</h2>
          <span className="h-0.5 w-8 bg-red-800 shrink-0" />
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded border border-blue-700/20">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="type-title text-sm font-bold">{q}</span>
                <ChevronDown className="size-4 shrink-0 text-red-800 transition-transform group-open:rotate-180" />
              </summary>
              {/* Bulma's unlayered minireset zeroes padding on <p>, so these need `!` */}
              <p className="px-5! pb-5! text-sm opacity-70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
