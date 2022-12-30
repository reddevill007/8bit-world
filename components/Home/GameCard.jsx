import Image from "next/image"
import Link from "next/link"

const GameCard = ({ index, title, image, link }) => {
    return (
        <Link href={link}>
            <div className='w-96 h-96 border rounded-md relative overflow-hidden'>
                <Image className="h-96 w-96" unoptimized src={image} height={100} width={100} alt={title} />
                <div className="absolute top-0 left-0 w-full opacity-0 shadow-[inset_0px_0px_5px_5px_rgba(29,41,91,0.6)] h-full flex items-center justify-center backdrop-blur-sm rounded-md hover:opacity-100">
                    <div>
                        <p>{index}</p>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GameCard