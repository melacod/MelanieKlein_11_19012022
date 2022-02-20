import { Link } from 'react-router-dom'
import './Thumb.css'

// Composant permettant d'afficher une vignette d'une location
// La vignette est cliquable et permet de naviguer vers la location en question
// Utilisé dans la page d'accueil
export default function Thumb({ location }) {
    return (
        <Link to={'location/' + location.id}>
            <div className="thumb">
                <img src={location.cover} alt={location.title} />
                <div>{location.title}</div>
            </div>
        </Link>
    )
}
