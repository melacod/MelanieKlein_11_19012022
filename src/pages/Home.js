import { GetAllLocations } from '../provider/LocationProvider.js'

import Banner from '../components/Banner.js'
import Error from '../components/Error.js'
import Loader from '../components/Loader.js'
import Thumb from '../components/Thumb.js'

import './Home.css'

// Composant page permettant d'afficher la page d'accueil de l'application
// Affichage de toutes les locations sous forme de vignette
export default function Home() {
    // Récupération de toutes les locations: asynchrone
    // Loading indique que le chargement est cours
    // Une fois le chargement terminé, data contient toutes les locations
    // Error indique que le chargement des locations a échoué
    // Exception contient les informations en cas d'erreur
    const { loading, data, error, exception } = GetAllLocations()

    return (
        <div className="home">
            <div className="top">
                <Banner src="banner/banner-home.jpg" />
                <div>Chez vous, partout et ailleurs</div>
            </div>
            <div className="thumbs-container">
                {/* 
                    Si erreur : affichage du composant Error 
                    Sinon Si chargement en cours : affichage du composant Loader
                    Sinon affichage de toutes les locations sous forme de vignette
                */}
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
