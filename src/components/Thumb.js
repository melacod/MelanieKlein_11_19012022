import './Thumb.css'

export default function Thumb({ location }) {
    return (
        <div className="thumb">
            <img src={location.cover} alt={location.title} />
            <div>{location.title}</div>
        </div>
    )
}
