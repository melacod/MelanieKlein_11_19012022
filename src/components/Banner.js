import './Banner.css'

// Composant permettant d'afficher les images bannières des pages
export default function Banner({ src }) {
    return <img className="banner" src={src} alt="Beautiful landscape" />
}
