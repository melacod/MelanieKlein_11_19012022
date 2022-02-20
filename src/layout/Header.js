import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.js'

import Navigation from './Navigation.js'

import './Header.css'

// Composant layout header permettant d'afficher le logo du site et
// la barre de navigation
export default function Header() {
    return (
        <header>
            <Link to="/">
                <Logo color="#FF6060" />
            </Link>
            <Navigation />
        </header>
    )
}
