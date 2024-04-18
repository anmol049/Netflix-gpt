import React from 'react'
import { image_CDN } from '../utils/constants'

function Cards({path}) {
  return (
    <div className='w-[100px] rounded-md hover:border border-white sm:w-[200px] '>
        <img src={image_CDN+path} alt="movie-image" className='rounded-md '/>
    </div>
  )
}

export default Cards