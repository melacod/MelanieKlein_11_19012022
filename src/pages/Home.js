import { useFetch } from '../utils/hooks.js'

import Banner from '../components/Banner.js'
import Error from '../components/Error.js'
import Loader from '../components/Loader.js'
import Thumb from '../components/Thumb.js'

import './Home.css'

export default function Home() {
    const { loading, data, error, exception } = useFetch('data/locations.json')

    return (
        <div className="home">
            <div className="top">
                <Banner src="banner/banner-home.jpg" />
                <div>Chez vous, partout et ailleurs</div>
            </div>
            <div className="thumbs-container">
                {error ? (
                    <Error exception={exception} />
                ) : loading ? (
                    <Loader />
                ) : (
                    data.map((location) => (
                        <Thumb key={location.id} location={location} />
                    ))
                )}
            </div>
        </div>
    )
}
