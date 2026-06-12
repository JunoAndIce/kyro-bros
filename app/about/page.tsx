import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Kyro & Bros — a Houston party supply rental team making events easy, stress-free, and fun.',
  alternates: { canonical: '/about' },
}

export default function AboutUs() {
  return (
    <main className="px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p>Learn more about Kyro Bros and our mission.</p>
    </main>
  )
}
