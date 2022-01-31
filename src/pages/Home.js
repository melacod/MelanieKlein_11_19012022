import { useFetch } from '../utils/hooks.js'

import imageTop from '../assets/top-home.jpg'

import Error from '../components/Error.js'
import Loader from '../components/Loader.js'
import Thumb from '../components/Thumb.js'

import './Home.css'

export default function Home() {
    const { loading, data, error, exception } = useFetch('data/locations.json')

    return (
        <div className="home">
            <div className="top">
                <img src={imageTop} alt="Beautiful landscape" />
                <div>Chez vous, partout et ailleurs</div>
            </div>
            <div className="thumbs-container">
                {error ? (
                    <Error exception={exception} />
                ) : loading ? (
                    <Loader />
                ) : (
                        <Thumb key={location.id} location={location} />
                    ))
                )}
            </div>
        </div>
    )
}
