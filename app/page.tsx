import InquiryForm from '@/app/components/InquiryForm'
import Navbar from '@/app/components/navbar'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="flex h-screen w-screen">
        <div className='self-end'>
          <h1 className="text-4xl font-bold">Kyro Bros</h1>
          <p className="mt-2 text-lg text-gray-700">Party supplies & delivery — let's make your event unforgettable.</p>
        </div>
        <div></div>
        <div></div>
      </section>
      {/* <InquiryForm /> */}
    </main>
  )
}
