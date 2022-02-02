import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

import { GetAllLocations } from '../provider/LocationProvider'

import Error from '../components/Error'
import Loader from '../components/Loader'

import './Location.css'
import Tag from '../components/Tag'

export default function Location() {
    const { locationId } = useParams()
    const { loading, data, error, exception } = GetAllLocations()

    const [location, setLocation] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setLocation(data.find((l) => l.id === locationId))
        }
    }, [data, locationId])

    /*
    location.tags.map((tagName) => (
        <Tag key={tagName} name={tagName} />
    ))
    */

    return (
        <div>
            {error ? (
                <Error exception={exception} />
            ) : loading ? (
                <Loader />
            ) : !location ? (
                navigate('/error')
            ) : (
                <div className="location">
                    <div className="gallery">todo gallery</div>
                    <div className="info">
                        <div className="left">
                            <div className="title">{location.title}</div>
                            <div className="city">{location.location}</div>
                            <div className="tags">
                                {location.tags.map((t) => (
                                    <Tag name={t} />
                                ))}
                            </div>
                        </div>
                        <div className="right">
                            <div className="host">
                                todo host {location.host.name}
                            </div>
                            <div className="rating">
                                todo rating: {location.rating}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
