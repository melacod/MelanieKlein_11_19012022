import { Link } from 'react-router-dom'
import './Error.css'

// Composant page permettant d'afficher un message d'erreur
// lorsque l'utilisateur se trouve sur une page inexistante dans les routes
// Cette page dispose d'un lien pour retourner sur la page d'accueil
export default function Error() {
    return (
        <div className="error">
            <div className="code">404</div>
            <div className="text">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <div className="link">
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
