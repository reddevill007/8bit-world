import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    }, [])


    return (
        <div className={`h-20 w-full ${colorChange ? "backdrop-blur" : "bg-transparent"} transition-all text-white flex justify-between items-center px-8 fixed top-0 left-0 z-50`}>
            <div className='flex gap-2'>
                <Image src="/assets/logo.svg" height={30} width={30} alt='logo' />
                <span className='font-bold font-mono-space'>8 BIT GAMES</span>
            </div>
            <div>
                <ul className='flex gap-10 text-lg tracking-widest font-bold font-mono-space'>
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