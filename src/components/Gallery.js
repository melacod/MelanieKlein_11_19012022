import { useEffect, useState } from 'react'

import ArrowLeft from '../assets/ArrowLeft'
import ArrowRight from '../assets/ArrowRight'

import './Gallery.css'

// Composant permettant d'afficher une gallerie d'images
// A partir d'un tableau de string contenant les URL un ensemble d'images, ce composant
export default function Gallery({ pictures }) {
    // Cet état indique l'index de l'image à afficher dans le tableau des URL des images
    const [index, setIndex] = useState(0)

    // Cet état sert à ajouter une classe css permettant d'activer les animations
    // de transitions (les animations sont activées une fois la navigation utilisée
    // pour éviter un effet indésirable au premier affichage du composant)
    const [animated, setAnimated] = useState(false)

    // Effet appliqué sur le tableau d'images (une seule fois car le tableau n'est jamais modifié ensuite)
    // La première image affichée est la première image du tableau, on set l'index à 0
    useEffect(() => {
        if (pictures && Array.isArray(pictures) && pictures.length > 0) {
            setIndex(0)
        }
    }, [pictures])

    // Cette fonction est appelée lorsqu'on navigue sur l'image précédente
    // On active les animations pour les effets de transitions entre images
    // Si on est sur la première image, on est dirigé sur la dernière image
    const previousPicture = () => {
        setAnimated(true)
        setIndex(index === 0 ? pictures.length - 1 : index - 1)
    }

    // Cette fonction est appelée lorsqu'on navigue sur l'image suivante
    // On active les animations pour les effets de transitions entre images
    // Si on est sur la dernière image, on est dirigé sur la première image
    const nextPicture = () => {
        setAnimated(true)
        setIndex(index === pictures.length - 1 ? 0 : index + 1)
    }

    return (
        <div className="gallery">
            <div className={'picture' + (animated ? ' animated' : '')}>
                {pictures.map((picture, indexPicture) => (
                    <img
                        className={indexPicture === index ? 'show' : 'hidden'}
                        key={'picture-' + indexPicture}
                        src={picture}
                        alt="Location presentation"
                    />
                ))}
            </div>
            <div className="previous">
                <ArrowLeft color="white" onClickFunction={previousPicture} />
            </div>
            <div className="next">
                <ArrowRight color="white" onClickFunction={nextPicture} />
            </div>
        </div>
    )
}
