import GameCard from "./GameCard"

const GameList = () => {
    return (
        <div className='min-h-screen bg-[#0D0540] bg-gradient-to-r from-[#070029] via-[#110656] to-[#070029] w-full py-[80px] text-white'>
            <h3 className='text-center text-4xl font-mono-space mb-8'>Our Game Library</h3>
            <div className='flex items-center w-[90%] mx-auto flex-wrap justify-between gap-5'>
                <GameCard index={1} title="Tic Tac Toe" image="/assets/tictactoe.jpg" link="/tictactoe" />
                <GameCard index={2} title="Magic Match Battle" image="/assets/memory.jpg" link="/memory-game" />
                <GameCard index={1} title="Snake Battle" image="/assets/snake.jpg" link="/tictactoe" />
                <GameCard index={1} title="Chess Battle" image="/assets/chess.jpeg" link="/tictactoe" />
            </div>
        </div>
    )
}

export default GameList