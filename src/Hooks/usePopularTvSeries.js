import { useDispatch } from "react-redux";
import { api_option } from "../utils/constants";
import { addPopularTvSeries } from "../redux/slice/movieslice";
import { useEffect } from "react";

const usePopularTvSeries = ()=>{
    const dispatch =useDispatch();
    async function  fetchData(){
        const promise = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",api_option)
        const json = await promise.json()
        dispatch(addPopularTvSeries(json.results))

    }
    useEffect(()=>{
        fetchData()
    },[])
}
export  default usePopularTvSeries;