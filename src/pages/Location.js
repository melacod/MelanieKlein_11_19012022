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
                                {location.tags.map((t, index) => (
                                    <Tag key={index + t} name={t} />
                                ))}
                            </div>
                        </div>
                        <div className="right">
                            <div className="host">
                                <div className="name">{location.host.name}</div>
                                <div className="picture"><img src={location.host.picture} alt={location.host.name} /></div>
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
