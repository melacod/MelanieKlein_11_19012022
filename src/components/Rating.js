import Star from '../assets/Star'

import './Rating.css'

// Composant permettant d'afficher la note d'une location
// Cette note va de 1 à 5, elle est affichée sur d'une séquence d'étoile
export default function Rating({ score }) {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((index) => (
                <Star key={'star-' + index} active={score >= index} />
            ))}
        </div>
    )
}
