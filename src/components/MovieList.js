import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function MovieList({title,list}) {
    // console.log(list);
    
  return (
    <div className='text-white mt-4 ml-3  min-w-[400px] sm:min-w-screen'>
        <h1 className='text-xl font-medium pl-2'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar  mt-2 '>
        {list&&
        <div className='flex gap-3'>
            {list.map((obj)=>{
                return <Link to={'/movie/'+obj.id} key={obj.id}><Cards path = {obj.poster_path} /></Link>
            })}
        </div>
        }
        </div>
    </div>
  )
}

export default MovieList