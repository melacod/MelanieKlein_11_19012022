import { useFetch } from '../utils/hooks'

// Fonction permettant de récupérer toutes les locations
export function GetAllLocations() {
    return useFetch(process.env.PUBLIC_URL + '/data/locations.json')
}
