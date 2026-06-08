import React from 'react'
import { DollarSign, Truck, Wrench, CalendarDays } from 'lucide-react'

const items = [
  { icon: DollarSign, title: 'Affordable Options',  desc: 'Great prices for every budget.' },
  { icon: Truck,       title: 'Delivery Available',  desc: 'Fast & reliable delivery.' },
  { icon: Wrench,      title: 'Setup Services',      desc: "We handle the setup so you don't have to." },
  { icon: CalendarDays, title: 'Subscription Plans', desc: 'Perfect for repeat events.' },
]

export default function Banner() {
  return (
    <div className="bg-blue-900 text-white">
      <div className="flex flex-col lg:flex-row">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <React.Fragment key={title}>
            {i > 0 && (
              <>
                <div className="hidden lg:block w-px bg-white/40 my-4" />
                <div className="lg:hidden h-px bg-white/40 mx-6" />
              </>
            )}
            <div className="flex items-center gap-4 flex-1 min-w-0 px-6 py-5">
              <Icon size={36} className="shrink-0 opacity-90" />
              <div className="min-w-0">
                <p className="type-title text-sm">{title}</p>
                <p className="text-sm opacity-70 mt-1">{desc}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
