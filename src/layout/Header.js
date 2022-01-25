import Navigation from './Navigation.js'

import { ReactComponent as Logo } from '../assets/logo.svg'

import './Header.css'

export default function Header() {
    return (
        <header>
            <Logo fill="#FF6060" className="logo" />
            <Navigation />
        </header>
    )
}
