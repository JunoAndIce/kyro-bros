import React from 'react'
import { Truck, Wrench, Users } from 'lucide-react'

const items = [
  { icon: Truck, title: 'Delivery Services', desc: 'We deliver your items on time, every time.' },
  { icon: Wrench, title: 'Setup & Takedown', desc: "Our team handles the hard work so you don't have to." },
  { icon: Users, title: 'Event Support', desc: "We're here to help make your event a success." },
]

export default function ServicesHome() {
  return (
    <div className="lg:px-0 py-18">
      <div className=" is-variable is-6 is-vcentered">
        <div className="column p-0!">
          <div className="bg-red-800 text-white p-6">
            <h2 className="title is-3 type-title has-text-white">We Do More Than Rent</h2>
            <p className="mt-2">We're here to make your event easy, stress-free, and a success.</p>
            <button className="button is-white is-outlined mt-4">Learn More</button>
          </div>
        </div>
        <div className="column outline outline-red-800">
          <div className="flex flex-col sm:flex-row">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <React.Fragment key={title}>
                {i > 0 && (
                  <>
                    {/* divider between services: vertical on row layout, horizontal when stacked */}
                    <div className="hidden sm:block w-px bg-blue-900/20 my-2" />
                    <div className="sm:hidden h-px bg-blue-900/20 mx-6" />
                  </>
                )}
                <div className="flex flex-col items-center text-center gap-3 flex-1 min-w-0 px-6 py-5">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-900 text-white shrink-0">
                    <Icon size={24} />
                  </span>
                  <p className="type-title font-bold text-sm">{title}</p>
                  <p className="text-sm opacity-70">{desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
