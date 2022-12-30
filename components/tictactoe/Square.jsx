import React from 'react'

const Square = ({ value, onClick }) => {
    return (
        <div onClick={onClick} className={`bg-black border h-[100px] w-[100px] text-5xl border-white text-white flex items-center cursor-pointer justify-center`}>
            <h5 className='transition-all duration-500 glow'>{value}</h5>
        </div>
    )
}

export default Square