import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { GetAllLocations } from '../provider/LocationProvider'

import Error from '../components/Error'
import Loader from '../components/Loader'

import './Location.css'

export default function Location() {
    const { locationId } = useParams()
    const { loading, data, error, exception } = GetAllLocations()

    const [ location, setLocation ] = useState({})

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setLocation(data.find(l => l.id === locationId))
        }
    }, [data, locationId])

    return (
        <div>
            {error ? (
                <Error exception={exception} />
            ) : loading ? (
                <Loader />
            ) : (
                <h1>Loaded {location.id} - {location.title}</h1>
            )}
        </div>
    )
}
