import Image from 'next/image'
import { Phone, MapPin, Mail } from 'lucide-react'
import confetti from '@/public/confetti.png'
import balloons from '@/public/merchandise/balloons.jpg'

const contacts = [
  { icon: Phone, label: '612-200-6350', sub: 'Call or Text', href: 'tel:612-200-6350' },
  { icon: MapPin, label: 'Minneapolis, MN', sub: 'Serving the Twin Cities', href: undefined },
  { icon: Mail, label: 'info@kyroandbros.com', sub: 'We reply fast!', href: 'mailto:info@kyroandbros.com' },
]

export default function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <h2 className="title is-3 type-title has-text-white mb-0! text-center sm:text-left uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-center sm:text-left sm:max-w-44">Let&apos;s make your next event one to remember.</p>
          <button className="button is-white text-red-800! type-title text-xs! font-bold uppercase sm:ml-auto">
            Get a Quote Today
          </button>
          <div className="hidden lg:block relative self-stretch w-44 -my-8 -mr-3 shrink-0">
            <Image src={balloons} alt="" fill className="object-cover pointer-events-none select-none" />
          </div>
        </div>
      </div>

      {/* contact band */}
      <div className="container px-3 py-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
          {contacts.map(({ icon: Icon, label, sub, href }) => (
            <div key={label} className="flex items-center justify-center gap-3 flex-1 min-w-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-800 text-red-800 shrink-0">
                <Icon size={20} />
              </span>
              <div className="text-left">
                {href ? (
                  <a href={href} className="block type-title font-bold text-sm text-blue-700">{label}</a>
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
      <div className="bg-blue-700 text-white text-center py-2">
        <p className="type-title text-xs font-bold uppercase">
          &copy; {new Date().getFullYear()} Kyro &amp; Bros Party Supply Rentals
        </p>
      </div>
    </footer>
  )
}
