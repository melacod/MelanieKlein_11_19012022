import { useFetch } from '../utils/hooks.js'

import Error from './Error.js'
import Loader from './Loader.js'

export default function ThumbsContainer() {
    const { loading, data, error, exception } = useFetch('data/logements.json')

    return (
        <div className="thumbs-container">
            {error ? (
                <Error exception={exception} />
            ) : loading ? (
                <Loader />
            ) : (
                <div>data</div>
            )}
        </div>
    )
}
