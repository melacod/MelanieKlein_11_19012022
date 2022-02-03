import { useEffect, useState } from 'react'

import ArrowLeft from '../assets/ArrowLeft'
import ArrowRight from '../assets/ArrowRight'

import './AnimatedGallery.css'

export default function AnimatedGallery({ pictures }) {

    const [index , setIndex] = useState(0)
    const [animated, setAnimated] = useState(false)

    useEffect( () => {
        if (pictures && Array.isArray(pictures) && pictures.length > 0) {
            setIndex(0)
        }
    }, [pictures])

    
    const previousPicture = () => {
        setAnimated(true)
        setIndex(index === 0 ? pictures.length - 1 : index - 1)
    }

    const nextPicture = () => {
        setAnimated(true)
        setIndex(index === pictures.length - 1 ? 0 : index + 1)
    }

    return (
        <div className="gallery">
            <div className={"picture" + (animated ? " animated" : "")}>
                {pictures.map( (picture, indexPicture) =>
                    <img className={indexPicture === index ? 'show' : 'hidden'} key={"picture-" + indexPicture} src={picture} alt="Location presentation" />
                )}
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
