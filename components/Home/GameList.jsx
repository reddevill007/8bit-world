import GameCard from "./GameCard"

const GameList = () => {
    return (
        <div className='min-h-screen bg-black w-full pt-[80px] text-white'>
            <h3 className='text-center text-4xl font-mono-space mb-8'>Our Game Library</h3>
            <div className='flex items-center w-[90%] mx-auto flex-wrap justify-between gap-5'>
                <GameCard index={1} title="Tic Tac Toe" image="/assets/tictactoe.png" link="/tictactoe" />
                <GameCard index={2} title="Magic Match Battle" image="/assets/snake.png" link="/memory-game" />
                <GameCard index={1} title="Snake Battle" image="/assets/chess.png" link="/tictactoe" />
                <GameCard index={1} title="Chess Battle" image="/assets/chess.png" link="/tictactoe" />
            </div>
        </div>
    )
}

export default GameList