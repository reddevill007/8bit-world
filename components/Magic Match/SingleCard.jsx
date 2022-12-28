import React from 'react'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleShow = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className='relative'>
            <div className={flipped ? "flipped" : ""}>
                <img className='front h-40 w-40 border rounded-sm' src={card.src} alt="card front" />
                <img className='back h-40 w-40 border rounded-sm' onClick={handleShow} src="/assets/magic.jpg" alt="card back" />
            </div>
        </div>
    )
}

export default SingleCard