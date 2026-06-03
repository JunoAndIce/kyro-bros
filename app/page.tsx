import InquiryForm from '@/app/components/InquiryForm'

export default function Home() {
  return (
    <main className="px-4 py-16">
      <nav className='bg-blue-300 px-4 py-8'>
        <ul className="flex gap-6 text-sm font-medium text-gray-mb-8">
          <li>Home</li>
          <li>Bookings</li>
          <li>Products</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <h1 className="">Kyro Bros</h1>
      <p className="">Party supplies & delivery — let's make your event unforgettable.</p>
      <InquiryForm />
    </main>
  )
}
