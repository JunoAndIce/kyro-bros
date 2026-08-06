import React from 'react'
import { DollarSign, Truck, Wrench, CalendarDays } from 'lucide-react'
import { STARTING_PRICE, DELIVERY_FROM, WEEKEND_MULTIPLIER, usd, multiplier } from '@/app/lib/pricing'

const items = [
  { icon: DollarSign,   title: `Packages From ${usd(STARTING_PRICE)}`, desc: 'Tent, table & chair bundles.' },
  { icon: Truck,        title: 'Delivery Available',  desc: `Flat-rate zones from ${usd(DELIVERY_FROM)}.` },
  { icon: Wrench,       title: 'Setup Services',      desc: 'Optional crew setup & teardown.' },
  { icon: CalendarDays, title: 'Weekend Rates',       desc: `Friday to Monday at ${multiplier(WEEKEND_MULTIPLIER)} the day rate.` },
]

export default function Banner() {
  return (
    <div className="bg-blue-700 text-white">
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
