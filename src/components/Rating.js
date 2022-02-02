import Star from '../assets/Star'

import './Rating.css'

export default function Rating( { score }) {

    console.log(score)

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map( (index) => (
                <Star key={"star-" + index} active={score >= index} />
            ))}
        </div>
    )
}