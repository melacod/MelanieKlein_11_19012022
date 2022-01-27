import './Thumb.css'

export default function Thumb({ logement }) {
    return (
        <div className="thumb">
            <img src={logement.cover} alt={logement.title} />
            <div>{logement.title}</div>
        </div>
    )
}
