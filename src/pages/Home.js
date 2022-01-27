import ThumbsContainer from '../components/ThumbsContainer.js'

import imageTop from '../assets/top-home.jpg'

import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="top">
                <img src={imageTop} alt="Beautiful landscape" />
                <div>Chez vous, partout et ailleurs</div>
            </div>
            <ThumbsContainer />
        </div>
    )
}
