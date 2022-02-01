import { Link } from 'react-router-dom'
import './Thumb.css'

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
