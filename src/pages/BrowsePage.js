import React, { useEffect, useState } from 'react'
import Netflix_Logo_PMS from '../components/Netflix_Logo_PMS.png'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { api_option, image_CDN } from '../utils/constants';
import {add} from '../redux/slice/movieslice'
import useBrowselist from '../Hooks/useBrowsselist';
import useBrowseTrailor from '../Hooks/useBrowseTrailor';
import MovieList from '../components/MovieList';
import usePopularMovielist from '../Hooks/usePopularMovielist';
import useTopRatedlist from '../Hooks/useTopRatedlist';
import useUpcomingMovielist from '../Hooks/useUpcomingMovielist';
import useTrendingMovielist from '../Hooks/useTrendingMovielist';
import Footer from '../components/Footer';
import { searchvalue } from '../redux/slice/gptSearchslice';
import GptSearch from '../components/GptSearch';
import BrowseNavBar from '../components/BrowseNavBar';
import useTopTvSeries from '../Hooks/useTopTvSeries';
import usePopularTvSeries from '../Hooks/usePopularTvSeries';
// import usetest from '../Hooks/usetest';


function BrowsePage() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userdata = useSelector((store)=>store.userinfo)
  const movieList = useSelector((store)=>store.movie)
  const trailor = useSelector((store)=>store.movie.trailor)
  const issearch = useSelector((store)=>store.search.issearch)
  const[count,setcount] = useState(0)

  
   
   

  useBrowselist();
  usePopularMovielist()
  useTopRatedlist();
  useUpcomingMovielist();
  useTrendingMovielist();
  useBrowseTrailor();
  useTopTvSeries();
  usePopularTvSeries();

  useEffect(()=>{
    setInterval(() => {
      setcount(count+1)
      if(count == 8){
        setcount(0)
      }
     },6000)
   },[count])


  
  return (
    <div className='bg-black min-w-[420px]  sm:min-w-fit'>
      {issearch?(<GptSearch/>):(
        <>  
          {trailor&&
          <div className='bg-gradient-to-r from-black relative'>
            <iframe src={"https://www.youtube.com/embed/"+trailor.key+"?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className=' mt-[0px] sm:mt-0 w-screen aspect-video hidden lg:block '></iframe>
            <Link to={'/movie/'+movieList.movie[count].id}><img src={image_CDN+movieList.movie[count].poster_path} alt="movie-poster" width="330px"  className='block lg:hidden mx-auto relative top-[120px] rounded-xl border border-white'/></Link>
               
            <div className=' text-white w-screen aspect-video  lg:bg-gradient-to-r lg:from-black absolute sm:absolute top-0'>
              <BrowseNavBar/>
              {movieList.movie&&
              <div className='mt-9 ml-12 sm:mt-[250px] w-5/12 '>
                
                <h1 className='text-lg font-bold hidden xl:block sm:text-4xl pl-9 '>{movieList.movie[0].original_title}</h1>
                <p className=' mt-4 pl-4 text-xl hidden xl:block'>{movieList.movie[0].overview}</p>
                <div className=' gap-3 m-6 hidden xl:flex'>
                  <Link to={'/movie/'+movieList.movie[0].id}><button className='text-black bg-white text-lg font-bold px-8 py-2 rounded-sm hover:bg-opacity-70'>Play</button></Link>
                  
                  <button className='text-black bg-gray-300 text-lg font-bold px-4 py-2 rounded-sm'>More info</button>
                </div>
              </div>}
            </div>
          </div>}


          <div className='bg-black w-fit'>
            <div className=' relative z-20 w-screen mt-[150px] lg:-mt-[150px]'>
              <MovieList title={"Trending"} list={movieList.trending}/>
              <MovieList title={"Top Rated Tv Series"} list={movieList.topTvSeries}/>
              <MovieList title={"Now Playing"} list={movieList.movie}/>
              <MovieList title={"Top Rated"} list={movieList.toprated}/>
              <MovieList title={"Popular"} list={movieList.popular}/>
              <MovieList title={"Popular Tv series"} list={movieList.popularTvSeries}/>
              <MovieList title={"Upcoming"} list={movieList.upcoming}/>

            </div>
          </div>
         <div className='overflow-hidden w-[375px] sm:w-screen'>

          <Footer/>
         </div>
        </>
      )}
      
    </div>
  )
}

export default BrowsePage



