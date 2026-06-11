import Image from 'next/image'
import { Star } from 'lucide-react'
import balloons from '@/public/merchandise/balloons.jpg'
import table from '@/public/merchandise/tables.jpg'
import tent from '@/public/merchandise/tents.jpg'
import chair from '@/public/merchandise/chair.jpg'
import lawn from '@/public/merchandise/lawn.jpg'


export default function PackagesHome() {
  const items = [
  { image: balloons, title: 'Balloons',  desc: 'Add color and excitement to any celebration.' },
  { image: table,       title: 'Tables',  desc: 'Sturdy, stylish tables for guests of every size.' },
  { image: tent,      title: 'Tents',      desc: 'Reliable shelter and shade for indoor or outdoor events.' },
  { image: chair, title: 'Chairs', desc: 'Comfortable seating for any size gathering.' },
  { image: lawn, title: 'Lawn Decor', desc: 'Decorative touches that transform your outdoor space.' },
]

  return (
    <main className="py-18">
      <div className="container text-center px-3">
        <div className="lg:mt-24">
          <div className="flex items-center justify-center gap-2 lg:gap-6">
            <Star className="size-4 lg:size-12 shrink-0 fill-red-800 text-red-800" />
            <h2 className="title mb-0 is-1 type-title text-xl! lg:text-6xl!">Ready to Elevate Your Event?</h2>
            <Star className="size-4 lg:size-12 shrink-0 fill-red-800 text-red-800" />
          </div>
          <div className="mt-6 lg:mt-24">
            <p className="subtitle is-6">Explore our wide range of rentals and packages to find the perfect fit for your next unforgettable occasion.</p>
          </div>
        </div>

        <div className="mt-12">
          {/* mobile: long horizontal cards with the label inside */}
          <div className="flex flex-col gap-4 mt-5 sm:hidden">
            {items.map(({ image, title, desc }) => (
              <div key={title} className="relative aspect-2/1 w-full overflow-hidden">
                <Image src={image} alt={desc} fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-background to-transparent" />
                <p className="absolute bottom-3 left-4 type-title font-bold text-sm text-foreground">{title}</p>
              </div>
            ))}
          </div>

          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
            {items.map(({ image, title, desc }) => (
              <div key={title} className="group relative aspect-square w-full overflow-hidden">
                <Image src={image} alt={desc} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-background to-transparent" />
                <p className="absolute bottom-3 left-4 type-title font-bold text-sm text-foreground">{title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button className="button is-danger is-outlined is-responsive is-large">Find What's Right for You</button>
          </div>
        </div>
      </div>
    </main>
  )
}
