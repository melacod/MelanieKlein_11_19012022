import { useEffect, useState } from 'react'
import ArrowLeft from '../assets/ArrowLeft'
import ArrowRight from '../assets/ArrowRight'
import './Gallery.css'

export default function Gallery({ pictures }) {

    const [picture, setPicture] = useState(null)
    const [index , setIndex] = useState(0)

    useEffect( () => {
        if (pictures && Array.isArray(pictures) && pictures.length > 0) {
            setIndex(0)
            setPicture(pictures[0])
        }
    }, [pictures])

    
    const previousPicture = () => {
        const newIndex = index === 0 ? pictures.length - 1 : index - 1
        setIndex(newIndex)
        setPicture(pictures[newIndex])
    }

    const nextPicture = () => {
        const newIndex = index === pictures.length - 1 ? 0 : index + 1
        setIndex(newIndex)
        setPicture(pictures[newIndex])
    }

    return (
        <div className="gallery">
            <div className="picture">
                <img src={picture} alt="Location presentation" />
            </div>
            <div className='previous'>
                <ArrowLeft color='white' onClickFunction={previousPicture} />
            </div>
            <div className='next'>
                <ArrowRight color='white' onClickFunction={nextPicture} />
            </div>
        </div>
    )
}
