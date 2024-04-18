import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api_option } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addvideo } from '../redux/slice/movieslice';

function MoviePage() {
  const parameters = useParams()
  const dispatch = useDispatch();
  console.log(parameters);
  const videosData = useSelector((state)=>state.movie.video)

  async function fetchData(){
    console.log(parameters.id);
    const promise = await fetch("https://api.themoviedb.org/3/movie/"+parameters.id+"/videos?language=en-US",api_option)
    const json = await promise.json()
    console.log(json.results);
    const allvideos = json.results.filter(item => item.type === 'Trailer');
    console.log(allvideos);
    const video = allvideos?allvideos[0]:json.results[0];
    console.log(video);
    dispatch(addvideo(video));


  }
  useEffect(()=>{
    fetchData()
  },[parameters.id])


  return (
    <div className='text-black'>
      {videosData&&

      <iframe src={"https://www.youtube.com/embed/"+videosData.key+"?autoplay=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className='w-screen h-screen' allowfullscreen></iframe>
      }

    </div>
  )
}

export default MoviePage