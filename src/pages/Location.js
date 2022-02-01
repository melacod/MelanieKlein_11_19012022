import { useParams } from 'react-router'

import './Location.css'

export default function Location() {
    const { locationId } = useParams()

    return <h1>Location page for : {locationId}</h1>
}
