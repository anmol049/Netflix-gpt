import React, { useEffect } from 'react'
import { api_option } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addpopular } from '../redux/slice/movieslice';

function usePopularMovielist() {
    const dispatch = useDispatch();
  const fetchData = async()=>{
    const promise = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",api_option)
    const json = await promise.json()
    dispatch(addpopular(json.results))
    
  }
  useEffect(()=>{
    fetchData()
  },[])
}

export default usePopularMovielist