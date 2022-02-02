import { useState } from 'react'

import ArrowDown from '../assets/ArrowDown'
import ArrowUp from '../assets/ArrowUp'

import './Collapse.css'

export default function Collapse({ title, children }) {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <div className="collapse">
            <div className="title" onClick={() => setExpanded(!isExpanded)}>
                <div className="text">{title}</div>
                <div className="icon">
                    {isExpanded ? (
                        <ArrowUp />
                    ) : (
                        <ArrowDown />
                    )}
                </div>
            </div>
            <div className={`content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {children}
            </div>
        </div>
    )
}

