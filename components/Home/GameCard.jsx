import Image from "next/image"
import Link from "next/link"

const GameCard = ({ index, title, image, link }) => {
    return (
        <Link href={link}>
            <div className='w-96 h-96 border p-3 rounded-md'>
                <Image className="h-96 w-96" unoptimized src={image} height={100} width={100} alt={title} />
            </div>
            <div>
                <p>{index}</p>
                <h3>{title}</h3>
            </div>
        </Link>
    )
}

export default GameCard