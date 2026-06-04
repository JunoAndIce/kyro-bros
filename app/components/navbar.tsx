'use client'

import Image from 'next/image'
import kyroLogo from '@/public/KYROANDBROS.png'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/app/components/ThemeToggle'

export default function Navbar() {

  return (
    <nav className='bg-blue-300 px-4 py-8 flex'>
        <Image alt="main logo of the Kyro and Bro's enterprise" src={kyroLogo} className='sm:w-96 lg:w-lg'></Image>
        {/* <ul className="gap-6 text-lg font-medium text-gray-mb-8 items-center ml-12">
          <li>Home</li>
          <li>Bookings</li>
          <li>Products</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul> */}
        <ThemeToggle />

        <Button variant="outline" className='ml-auto rounded-3xl' size="icon">Button</Button>
      </nav>
  )
}
