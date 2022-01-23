import React, {useState, useEffect} from 'react'
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav>
            <a href="index.html" aria-label="Accueil">
                <img alt="Logo" src="./public/LogoKasa.png" />
            </a>
            <ul className="list">
                <li className='items'>Accueil</li>
                <li className='items'>A Propros</li>
            </ul>
        </nav>
    )
}