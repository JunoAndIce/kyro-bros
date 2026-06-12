import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packages & Party Supplies',
  description:
    'Browse curated event packages, subscription plans, and individual party supplies from Kyro & Bros in Houston, TX.',
  alternates: { canonical: '/products' },
}

export default function Products() {
  return (
    <main className="px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <p>Browse our party supply products.</p>
    </main>
  )
}
