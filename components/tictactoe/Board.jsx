import React, { useState } from 'react'
import Square from './Square'
import ShowWinner from './ShowWinner';

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winningCondn = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winningCondn) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return true;
            }
        }

        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) {
            return
        }

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null))
    }

    // const handleDraw = () => {
    //     if (state.every(element => element !== null));
    //     {
    //         return true;
    //     }
    //     return false;
    // }

    // const isDraw = handleDraw();

    return (
        <div className='mx-auto text-white'>
            {isWinner ? (
                <ShowWinner winner={isXTurn ? "0 " : "X "} onClick={handleReset} />
            ) : (
                <>
                    <h4 className='mb-5'>Player {isXTurn ? "X" : "0"} turn</h4>
                    <div className='flex gap-2 mb-2 justify-evenly items-center'>
                        <Square value={state[0]} onClick={() => handleClick(0)} />
                        <Square value={state[1]} onClick={() => handleClick(1)} />
                        <Square value={state[2]} onClick={() => handleClick(2)} />
                    </div>
                    <div className='flex gap-2 mb-2 justify-evenly items-center'>
                        <Square value={state[3]} onClick={() => handleClick(3)} />
                        <Square value={state[4]} onClick={() => handleClick(4)} />
                        <Square value={state[5]} onClick={() => handleClick(5)} />
                    </div>
                    <div className='flex gap-2 mb-5 justify-evenly items-center'>
                        <Square value={state[6]} onClick={() => handleClick(6)} />
                        <Square value={state[7]} onClick={() => handleClick(7)} />
                        <Square value={state[8]} onClick={() => handleClick(8)} />
                    </div>
                </>
            )}
            <button onClick={handleReset} className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">Reset</span>
            </button>
        </div>
    )
}

export default Board