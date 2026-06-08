import Image from 'next/image'
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
        <div className="">
          <h2 className="title is-2 type-title ">Ready to Elevate Your Event?</h2>
          <p className="subtitle is-6 mt-3">Explore our wide range of rentals and packages to find the perfect fit for your next unforgettable occasion.</p>
        </div>

        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
            {items.map(({ image, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image src={image} alt={desc} fill className="object-cover" />
                </div>
                <p className="type-title font-bold text-sm">{title}</p>
              </div>
            ))}
          </div>
          <button className="button is-danger is-outlined">Find What's Right for You</button>
        </div>    
      </div>
    </main>
  )
}
