import { useDispatch } from "react-redux"
import { api_option } from "../utils/constants"
import { addTopTvSeries } from "../redux/slice/movieslice"
import { useEffect } from "react"

const useTopTvSeries = ()=>{
    const dispatch = useDispatch()
    async function fetchData(){
        const promise = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",api_option)
        const json = await promise.json()
        dispatch(addTopTvSeries(json.results))
    }
    useEffect(()=>{
        fetchData()
    },[])
}
export default useTopTvSeries