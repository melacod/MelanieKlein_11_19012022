import { NavLink } from 'react-router-dom'

import './Navigation.css'

// Composant layout naviagtion permettant d'afficher les liens
// vers les pages de l'application.
// On utilise NavLink pour mettre en évidence le lien actif
export default function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about">A Propros</NavLink>
                </li>
            </ul>
        </nav>
    )
}
