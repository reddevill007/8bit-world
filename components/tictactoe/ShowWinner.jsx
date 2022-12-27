import React from 'react'

const ShowWinner = ({ winner, onClick }) => {
    return (
        <div className='w-40 h-40 rounded-lg bg-red-200 flex justify-center items-center flex-col gap-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10'>
            <p>{winner} Won </p>
            <button onClick={onClick}>Play Again</button>
        </div>
    )
}

export default ShowWinner