
import { ReactComponent as Logo } from '../assets/logo.svg';

import "./Footer.css";

export default function Footer () {
    return (
        <footer>
            <Logo fill="#000000" className='logo' />
            <div>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}