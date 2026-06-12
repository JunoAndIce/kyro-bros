import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Event',
  description:
    'Reserve party rentals, delivery, and setup & teardown services for your next event in the Houston area.',
  alternates: { canonical: '/bookings' },
}

export default function Bookings() {
  return (
    <main className="px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Bookings</h1>
      <p>Manage your event bookings here.</p>
    </main>
  )
}
