import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import confetti from '@/public/confetti.webp'

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    q: 'Do you deliver, and which areas do you cover?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    q: 'Is setup and teardown included in my rental?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    q: 'What is your weather or cancellation policy?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    q: 'Do you require a deposit to reserve a date?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
]

export default function ContactFaq() {
  return (
    <section>
      {/* red banner title band */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-14 lg:py-24 text-center">
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
      <div className="mx-auto max-w-3xl px-3 py-14">
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
              <p className="px-5 pb-5 text-sm opacity-70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
