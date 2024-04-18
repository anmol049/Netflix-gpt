import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { api_option } from '../utils/constants';
import { addupcoming } from '../redux/slice/movieslice';

function useUpcomingMovielist() {
    const dispatch = useDispatch();
    const fetchData = async()=>{
      const promise = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",api_option)
      const json = await promise.json()
      dispatch(addupcoming(json.results))
      
    }
    useEffect(()=>{
      fetchData()
    },[])
 
}

export default useUpcomingMovielist