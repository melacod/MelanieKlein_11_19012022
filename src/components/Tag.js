import './Tag.css'

// Composant permettant d'afficher un tag lié à une location
export default function Tag({ name }) {
    return <div className="tag">{name}</div>
}
