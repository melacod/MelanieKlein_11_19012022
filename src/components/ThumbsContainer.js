import { useFetch } from '../utils/hooks.js'

import Error from './Error.js'
import Loader from './Loader.js'
import Thumb from './Thumb.js'

import './ThumbsContainer.css'

export default function ThumbsContainer() {
    const { loading, data, error, exception } = useFetch('data/locations.json')

    return (
        <div className="thumbs-container">
            {error ? (
                <Error exception={exception} />
            ) : loading ? (
                <Loader />
            ) : (
                data.map((logement) => (
                    <Thumb key={logement.id} logement={logement} />
                ))
            )}
        </div>
    )
}
