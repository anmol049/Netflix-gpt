import React, { useEffect, useRef, useState } from 'react'
import { languageTypes } from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { api_option } from '../utils/constants'
import { setSearchedMovieList } from '../redux/slice/gptSearchslice'
import GptSearchSuggestion from './GptSearchSuggestion'

function GptSearchBar() {
  const changeLanguageKey = useSelector(store=>store.configration.language) 
  const dispatch = useDispatch();
  const inputText = useRef();
  const [moviename,setmoviename] = useState("")

  const fetchdata = async()=>{
    const promise = await fetch("https://api.themoviedb.org/3/search/movie?query=" + moviename + "&include_adult=false&language=en-US&page=1",api_option)
    // console.log(promise);
    const json = await promise.json()
    // console.log(json.results);
    // console.log(moviename);
    dispatch(setSearchedMovieList({searchedResult:json.results,searchedText:moviename}))
}



  function handleFormSubmit(e){
    e.preventDefault();
    // console.log(inputText.current.value);
    setmoviename(inputText.current.value)
    // fetchdata()
    // useSearchedMovie(inputText.current.value)
  }
  useEffect(()=>{
    fetchdata();
  },[moviename])

  return (
    <div className="flex justify-center">
        <form action="#" className=' flex gap-7 flex-col sm:flex-row' onSubmit={handleFormSubmit}>
            <input type="text" placeholder={languageTypes[changeLanguageKey].inputinside} className='py-2 px-5 rounded-md w-[330px] sm:w-[400px]' ref={inputText}/>
            <button className='text-white bg-red-700 py-3 rounded-md sm:px-6' onClick={handleFormSubmit}>{languageTypes[changeLanguageKey].search} </button>
        </form>
        {/* <GptSearchSuggestion/> */}
    </div>
  )
}

export default GptSearchBar
// absolute top-6 left-[450px]