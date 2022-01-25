import { ReactComponent as Logo } from '../assets/logo.svg'

import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <Logo className="logo" />
            <div>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}
