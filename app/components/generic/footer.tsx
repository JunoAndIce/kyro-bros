import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'
import confetti from '@/public/confetti.webp'
import balloons from '@/public/merchandise/balloons-transparent.webp'

const contacts = [
  { icon: Phone, label: '612-200-6350', sub: 'Call or Text', href: 'tel:612-200-6350' },
  { icon: MapPin, label: 'Houston, TX', sub: 'Serving the Houston area', href: undefined },
  { icon: Mail, label: 'kyrobros34@gmail.com', sub: 'We reply fast!', href: 'mailto:kyrobros34@gmail.com' },
]

export default function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <h2 className="title is-3 type-title has-text-white mb-0 text-center sm:text-left uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-center sm:text-left sm:max-w-44">Let&apos;s make your next event one to remember.</p>
          <Link href="/contact" className="button is-white text-red-800 type-title text-xs font-bold uppercase sm:ml-auto">
            Get a Quote Today
          </Link>
          <div className="hidden lg:block relative self-stretch w-44 -my-8 -mr-3 shrink-0">
            <Image src={balloons} alt="" fill sizes="44px" className="opacity-20 pointer-events-none select-none" />
          </div>
        </div>
      </div>

      {/* contact band */}
      <div className="container px-15 py-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 ">
          {contacts.map(({ icon: Icon, label, sub, href }) => (
            <div key={label} className="flex items-center gap-3 flex-1 min-w-0 lg:justify-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-800 text-red-800 shrink-0">
                <Icon size={20} />
              </span>
              <div className="text-left">
                {href ? (
                  <a href={href} className="mb-0 block type-title font-bold text-sm text-blue-700">{label}</a>
                ) : (
                  <p className="type-title font-bold text-sm text-blue-700">{label}</p>
                )}
                <p className="text-xs opacity-70">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* copyright bar */}
      <div className="bg-blue-700 text-white text-center py-2 ">
        <p className="type-title text-xs font-bold uppercase">
          &copy; {new Date().getFullYear()} <span>Kyro &amp; Bros Party Supply Rentals</span>
        </p>
      </div>

      {/* site credits bar */}
      <div className="bg-blue-800 text-white text-center py-2 ">
        <p className="text-xs opacity-90">
          Made by{' '}
          <a
            href="https://github.com/JunoAndIce"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-white font-bold underline decoration-white/40 underline-offset-2 hover:decoration-white"
          >
            Juno &amp; Ice 
          </a>{' '}
          &middot; For The Culture Enterprise
        </p>
      </div>
    </footer>
  )
}
