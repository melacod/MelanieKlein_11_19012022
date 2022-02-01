import { useFetch } from "../utils/hooks";

export function GetAllLocations() {
    return useFetch(process.env.PUBLIC_URL + '/data/locations.json')
}
