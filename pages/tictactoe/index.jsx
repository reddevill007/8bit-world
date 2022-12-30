import React from 'react'
import Head from 'next/head'
import Board from '../../components/tictactoe/Board'

const TicTacToe = () => {
    return (
        <div className='bg-game-bg bg-no-repeat bg-cover bg-center bg-fixed font-mono-space min-h-screen'>
            <Head>
                <title>8 Bit Games - Tic Tac Toe</title>
            </Head>
            <h1 className='text-white text-center h-[100px] py-3 text-5xl pt-20'>Tic Tac Toe</h1>
            <div className='min-h-[calc(100vh-100px)] flex items-center justify-center w-full'>
                <Board />
            </div>
        </div>
    )
}

export default TicTacToe