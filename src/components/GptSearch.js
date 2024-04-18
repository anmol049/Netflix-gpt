import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'
import BrowseNavBar from './BrowseNavBar'
import { useSelector } from 'react-redux'

function GptSearch() {

  return (
    <div className="bg-black relative w-fit">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="baground-image" className='h-full sm:w-screen fixed'/>
      <div className='absolute top-0 sm:w-screen bg-gradient-to-r from-black  overflow-y-scroll w-fit overflow-x-hidden'>
        <BrowseNavBar/> 
      <GptSearchBar/>
      <GptSearchSuggestion/>
      {/* <div className='bg-gradient-to-l from-black w-screen h-auto'>

      </div> */}

        </div>
    </div>
        
  )
}

export default GptSearch



 {/* <form action="#" className='absolute top-6 left-[450px] flex gap-7'>
            <input type="text" placeholder='enter movie' className='py-2 px-5 rounded-md w-[400px]' on/>
            <button className='text-white bg-red-700 px-6 rounded-md'>Search</button>
        </form> */}