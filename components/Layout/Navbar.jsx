import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-transparent text-white flex justify-between items-center px-8 fixed top-0 left-0'>
        <div className='flex gap-2'>
            <Image src="/assets/logo.svg" height={30} width={30} alt='logo'  />
            <span className='font-bold'>8 BIT GAMES</span>
        </div>
        <div>
            <ul className='flex gap-10 text-lg tracking-widest font-bold'>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/">GAMES</Link>
                </li>
                <li>
                    <Link href="/">ABOUT</Link>
                </li>
                <li>
                    <Link href="/">CONTACT</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar