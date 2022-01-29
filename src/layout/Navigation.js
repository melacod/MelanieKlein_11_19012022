import { NavLink } from 'react-router-dom'

import './Navigation.css'

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
