import React from 'react'
import { image_CDN } from '../utils/constants'

function SearchedCards({title,imagepath}) {
    if(imagepath == null) return null
  return (
    <div className='w-[200px] rounded-md hover:border border-white'>
        <img src={image_CDN+imagepath} alt="movie-image" className='rounded-md  sm:w-[200px] h-[300px]'/>
        <h1 className='ml-4 my-4'>{title}</h1>
    </div>
  )
}

export default SearchedCards