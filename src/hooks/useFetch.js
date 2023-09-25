import {useEffect, useState} from 'react'

function useFetch(url) {
const[data,setData] = useState(null);
const[error,setError] = useState(null);
const[loading,setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () =>{
        setLoading(true)
        try{
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
            setLoading(false)
        } 
        catch (error){
                setError(error)
                setLoading(false)
        }
    }
    fetchData()
}, [url])
// Url i birkere çalıtırdığı için useffect de URL i yazdım 
  return {loading, error, data }
}

export default useFetch