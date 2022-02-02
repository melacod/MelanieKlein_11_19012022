import Logo from '../assets/Logo.js'

import Navigation from './Navigation.js'

import './Header.css'

export default function Header() {
    return (
        <header>
            <Logo color="#FF6060" />
            <Navigation />
        </header>
    )
}
