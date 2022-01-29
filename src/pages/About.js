import Collapse from '../components/Collapse.js'

import imageTop from '../assets/top-about.jpg'

import './About.css'

export default function About() {
    return (
        <div className="about">
            <img src={imageTop} alt="Beautiful landscape" />

            <Collapse title="Fiabilité">
                <span>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </span>
            </Collapse>

            <Collapse title="Respect">
                <span>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </span>
            </Collapse>

            <Collapse title="Service">
                <span>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                    N'hésitez pas à nous contacter si vous avez la moindre question.
                </span>
            </Collapse>

            <Collapse title="Responsabilité">
                <span>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                    chaque logement correspond aux critères de sécurité établis par nos services. 
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
                    vérifier que les standards sont bien respectés. Nous organisons également des ateliers 
                    sur la sécurité domestique pour nos hôtes.
                </span>
            </Collapse>
        </div>
    )
}
