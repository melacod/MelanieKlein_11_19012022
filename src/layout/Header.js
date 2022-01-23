import logo from '../assets/logo.svg';
import "./Header.css";
import Navigation from "./Navigation.js";

export default function Header() {
    return (
        <header>
            <img src={logo} alt='K@sa' className='logo' />
            <Navigation />
        </header>
    )
}