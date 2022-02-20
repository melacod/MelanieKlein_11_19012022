import Logo from '../assets/Logo'

import './Footer.css'

// Composant layour footer permettant d'afficher le copyright du site
export default function Footer() {
    return (
        <footer>
            <Logo />
            <div>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}
