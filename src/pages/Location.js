import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

import { GetAllLocations } from '../provider/LocationProvider'

import Error from '../components/Error'
import Loader from '../components/Loader'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import Gallery from '../components/Gallery'

import './Location.css'

// Composant page permettant d'afficher une location à partir de son identifiant
export default function Location() {
    // Récupération du parameter locationId de l'URL
    // Ce paramètre correspondant à l'identifiant de la location à afficher
    const { locationId } = useParams()

    // Objet location à afficher (l'identifiant de cette location est égale à locationId)
    const [location, setLocation] = useState({})

    // Navigation pour aller à la page d'erreur si on ne trouve pas de location
    // avec un identifiant égale à locationId
    const navigate = useNavigate()

    // Récupération de toutes les locations: asynchrone
    // Loading indique que le chargement est cours
    // Une fois le chargement terminé, data contient toutes les locations
    // Error indique que le chargement des locations a échoué
    // Exception contient les informations en cas d'erreur
    const { loading, data, error, exception } = GetAllLocations()

    // Effet lorsque data (toutes les locations) est modifié
    // Lorsque toutes les locations sont chargées, on met à jour la location à afficher en parcourant
    // le tableau de toutes les locations et en filtrant sur l'identifiant de la location à afficher (locationId)
    useEffect(() => {
        if (data && Array.isArray(data)) {
            setLocation(data.find((l) => l.id === locationId))
        }
    }, [data, locationId])

    return (
        <div>
            {/* 
                Si erreur : affichage du composant Error 
                Sinon Si chargement en cours : affichage du composant Loader
                Sinon si aucune location a un identifiant égale à locationId : navigation vers la page error
                        Cette URL n'existe pas : par conséquent on tombe sur la page d'erreur 404
                Sinon affichage de la location
            */}
            {error ? (
                <Error exception={exception} />
            ) : loading ? (
                <Loader />
            ) : !location ? (
                navigate('/error')
            ) : (
                <div className="location">
                    <Gallery pictures={location.pictures} />
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
                                <div className="picture">
                                    <img
                                        src={location.host.picture}
                                        alt={location.host.name}
                                    />
                                </div>
                            </div>
                            <Rating score={parseInt(location.rating)} />
                        </div>
                    </div>
                    <div className="description">
                        <Collapse title="Description">
                            <span>{location.description}</span>
                        </Collapse>
                        <Collapse title="Équipements">
                            <ul>
                                {location.equipments.map((equipment, index) => (
                                    <li key={'equipment-' + index}>
                                        {equipment}
                                    </li>
                                ))}
                            </ul>
                        </Collapse>
                    </div>
                </div>
            )}
        </div>
    )
}
