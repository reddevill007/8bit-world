import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className='p-10 relative bg-hero-bg min-h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center'>
                <h1 className='head font-bold text-5xl text-white'>WELCOME TO 8 BIT GAMES</h1>
            </div>
            <div className='font-mono-space absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col gap-y-[12px] items-center justify-center'>
                <span className='text-white'>Scroll down</span>
                <Image src="/assets/scroll.png" className='bounce' height={45} width={45} alt="Scroll down" />
            </div>
        </>
    )
}

export default Hero