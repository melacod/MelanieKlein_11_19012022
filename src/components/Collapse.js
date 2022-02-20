import { useState } from 'react'

import ArrowDown from '../assets/ArrowDown'
import ArrowUp from '../assets/ArrowUp'

import './Collapse.css'

// Composant permettant d'afficher/de masquer un ensemble d'éléments
// Ce composant comporte une barre de titre et une zone contenant les enfants de ce composant
// Lorsqu'on clique sur le titre, la zone contenant les enfants est affichée/masquée alternativement
export default function Collapse({ title, children }) {
    // Cet état indique si la zone contenant les enfants est affichée/masquée
    const [isExpanded, setExpanded] = useState(false)

    return (
        <div className="collapse">
            <div className="title" onClick={() => setExpanded(!isExpanded)}>
                <div className="text">{title}</div>
                <div className="icon">
                    {isExpanded ? (
                        <ArrowUp color="white" />
                    ) : (
                        <ArrowDown color="white" />
                    )}
                </div>
            </div>
            <div className={`content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {children}
            </div>
        </div>
    )
}
