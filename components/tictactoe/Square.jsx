import React from 'react'

const Square = ({ value, onClick }) => {
    return (
        <div onClick={onClick} className={`${value == 'X' ? "bg-red-200" : "bg-gray-400"} border h-[100px] w-[100px] text-5xl border-white text-white flex items-center cursor-pointer justify-center`}>
            <h5>{value}</h5>
        </div>
    )
}

export default Square