import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addtoprated } from '../redux/slice/movieslice';
import { api_option } from '../utils/constants';

function useTopRatedlist() {
    const dispatch = useDispatch();
    const fetchData = async()=>{
      const promise = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",api_option)
      const json = await promise.json()
      dispatch(addtoprated(json.results))
      
    }
    useEffect(()=>{
      fetchData()
    },[])

}

export default useTopRatedlist