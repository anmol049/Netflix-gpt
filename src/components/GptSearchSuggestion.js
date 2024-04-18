import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchvalue } from '../redux/slice/gptSearchslice';
import MovieList from './MovieList';
import SearchedCards from './SearchedCards';
import { Link } from 'react-router-dom';

function GptSearchSuggestion() {
  const searchedResult = useSelector((store => store.search))
  // console.log(searchedResult);
  // const dispatch = useDispatch();


  // function handlebodyclick(){
  //   dispatch(searchvalue())


  //   // onClick={handlebodyclick}
    
  // }
  return (
    <div className='text-white' >
      <div className=''>
        {searchedResult.searchedText&&

        <h1 className='m-6 p-4 text-xl'>Searched Result for :==:= <span className='text-bold text-2xl'>{searchedResult.searchedText.charAt(0).toUpperCase()+searchedResult.searchedText.slice(1)}</span> </h1>
        }

        <div className='flex gap-7 ml-[100px] sm:ml-0 flex-wrap sm:m-3 p-4'>
          {searchedResult.searchedMovieList&&
          searchedResult.searchedMovieList.map((obj)=>{
            return <Link to={'/movie/'+obj.id} key={obj.id}><SearchedCards title={obj.title} imagepath={obj.poster_path} /></Link>
          })}
        </div>        

      </div>
    </div>
  )
}

export default GptSearchSuggestion