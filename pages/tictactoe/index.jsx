import React from 'react'
import Head from 'next/head'
import Board from '../../components/tictactoe/Board'

const TicTacToe = () => {
    return (
        <div className='bg-black font-mono-space'>
            <Head>
                <title>8 Bit Games - Tic Tac Toe</title>
            </Head>
            <h1 className='text-white text-center h-[100px] py-3 text-5xl'>Tic Tac Toe</h1>
            <div className='min-h-[calc(100vh-100px)] flex items-center justify-center w-full bg-black'>
                <Board />
            </div>
        </div>
    )
}

export default TicTacToe