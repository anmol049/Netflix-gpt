import { useEffect, useState } from "react";
import { api_option } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailor } from "../redux/slice/movieslice";
const useBrowseTrailor =()=>{
    const dispatch = useDispatch();
    const trailorID = useSelector(store=>store.movie.ID)
    // console.log(trailorID);
    
   
    // '693134'
    // (trailorID!=null)?trailorID:'693134'
    const fetchData = async ()=>{
        // const id = movieList.movie[0].id;
        const promise = await fetch('https://api.themoviedb.org/3/movie/'+'693134'+'/videos?language=en-US', api_option);
        const json = await promise.json();
        // console.log(json.results);
        const alltrailor = json.results.filter(item => item.type === 'Trailer');
        const trailor = alltrailor?alltrailor[0]:json.results[0];
        // console.log(trailor);
        dispatch(addtrailor(trailor));

    }
    useEffect(()=>{
        fetchData();
    },[])
} 
export default useBrowseTrailor;