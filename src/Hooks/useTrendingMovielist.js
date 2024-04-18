import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { api_option } from '../utils/constants';
import { addtrending } from '../redux/slice/movieslice';
// import { addtoprated } from '../redux/slice/movieslice';

function useTrendingMovielist() {
    const dispatch = useDispatch();
    const fetchData = async()=>{
      const promise = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",api_option)
      const json = await promise.json()
      dispatch(addtrending(json.results))
      
    }
    useEffect(()=>{
      fetchData()
    },[])
 
}

export default useTrendingMovielist