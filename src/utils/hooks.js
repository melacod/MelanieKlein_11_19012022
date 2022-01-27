import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)
    const [exception, setException] = useState('')

    useEffect(() => {
        if (!url) return
        setLoading(true)

        async function fetchData() {
            try {
                // Uncomment to simulate a sleep of N seconds => loader being displayed
                // await new Promise((r) => setTimeout(r, 5 * 1000))
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                //console.log(err)
                setError(true)
                setException(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { loading, data, error, exception }
}
