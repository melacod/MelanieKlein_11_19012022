import { useState } from 'react'

import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../assets/arrow-up.svg'

import './Collapse.css'

export default function Collapse({ title, children }) {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <div className="collapse">
            <div className="title" onClick={() => setExpanded(!isExpanded)}>
                <div className="text">{title}</div>
                <div className="icon">
                    {isExpanded ? (
                        <ArrowUp className="arrow" />
                    ) : (
                        <ArrowDown className="arrow" />
                    )}
                </div>
            </div>
            <div className={`content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {children}
            </div>
        </div>
    )
}

