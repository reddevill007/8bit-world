import React, { useEffect, useState } from 'react'
import SingleCard from '../../components/Magic Match/SingleCard';

const cardImages = [
    { "src": "/assets/img_1.jpg", matched: false },
    { "src": "/assets/img_2.jpg", matched: false },
    { "src": "/assets/img_3.jpg", matched: false },
    { "src": "/assets/img_4.jpg", matched: false },
    { "src": "/assets/img_5.jpg", matched: false },
    { "src": "/assets/img_6.jpg", matched: false },
]

const MemoryGame = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // Suffle cards
    const shufffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards);
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(0);
    }

    // handle choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        shufffleCards();
    }, [])

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    })
                })
                setTimeout(() => {
                    resetTurn();
                }, 500);
            } else {
                setTimeout(() => {
                    resetTurn();
                }, 500);
            }
        }
    }, [choiceOne, choiceTwo])

    // Reset turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    }

    return (
        <div className='bg-black text-white min-h-screen w-full flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-5xl mt-18'>Magic Match</h1>
            <button onClick={shufffleCards}>New Game</button>
            <div className='grid gap-5 grid-cols-4 content-center'>
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
            <p>Turns : {turns}</p>
        </div>
    )
}

export default MemoryGame