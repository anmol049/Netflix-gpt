import { useDispatch } from 'react-redux';
import {api_option} from '../utils/constants';
import {add} from '../redux/slice/movieslice'
import { useEffect } from 'react';
import { addTrailorID } from '../redux/slice/movieslice';


const useBrowselist = ()=>{
    const dispatch=useDispatch();
    async function fetchdata (){
        const promise = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', api_option)
        const json = await promise.json();
        // console.log(json.results)
        dispatch(add(json.results))
        // dispatch(add())
        // dispatch(addMovieID)
        dispatch(addTrailorID(json.results[0].id));
      }
    
      useEffect(()=>{
        fetchdata()
      },[])
}
export default useBrowselist