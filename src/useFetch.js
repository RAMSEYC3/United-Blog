import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true) //from here
    const [error, setError] = useState(null)

    //fetching the data from the local database which is db.json 
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not connect to database try later")
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 2000)//set the time for loading while fetching data from databse 
        return () => abortCont.abort
    }, []);
    
    return { data, isPending, error }
}

export default useFetch




