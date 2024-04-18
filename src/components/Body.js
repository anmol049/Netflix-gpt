import React from 'react'
import Header from './Header'
import Netflix_Logo_PMS from './Netflix_Logo_PMS.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import TV from '../assets1/tv.png'
import Mobile from '../assets1/mobile-0819.jpg'
import appletv from '../assets1/device-pile-in.png'
import childrenphoto from '../assets1/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'

function Body() {
  return (
    <div  className='bg-gray-600 w-fit border border-black'>
        {/* <Header/> */}
        <div className="top-banner relative w-fit h-screen">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="baground-image" className=' h-[775px] sm:h-[823px] md:min-h-[775px] xl:h-[823px] lg:h-[700px] lg:w-screen'/>
          <div className='absolute top-0 bg-gradient-to-r from-black w-[1000px] h-fit lg:w-screen lg:h-[775px] xl:h-screen sm:h-[823px]'>

          <div className="continor flex justify-between ">
            <div className="left-containfor ">
              <img src={Netflix_Logo_PMS} alt="logo" className='w-[200px]'/>
            </div>
            <div className="right-containor">
              <ul className='flex gap-20 my-6 mx-9 text-xl font-medium'>
                <select name="" id="" className='border border-black px-4 text-white bg-black opacity-65 rounded-md hidden sm:block'>
                  <option value="">English</option>
                  <option value="">French</option>
                  <option value="">Spanish</option>
                </select>
                <Link to='/login' className='border border-black px-4 py-1 pb-2 text-white  bg-red-600 text-3xl font-medium rounded-md sm:text-xl'><li>Sign In</li></Link>
              </ul>
            </div>
          </div>
          <div className="bottom-containor mt-72 text-center  text-white">
              <h1 className='text-5xl font-medium'>Unlimited movies, TV shows and more</h1>
              <p className='text-3xl font-medium my-6'>Watch anywhere. Cancel anytime.</p>
              <form action="#">
                  <h3 className='text-xl font-semibold my-4'>Ready to watch? Enter your email to create or restart your membership.</h3>
                  <div className='flex justify-center gap-5 m-8 flex-col sm:flex-row'>
                      <div className="left-input">
                          <input type="text" placeholder='Email address' className='border border-white rounded-md py-7 w-[934px] pl-3 bg-black opacity-75 sm:w-[410px] sm:py-3' />
                      </div>
                      <div className="right-button primary-button">
                          <h3 className='border border-black    rounded-md bg-red-600 py-6 text-white text-2xl sm:px-8 sm:py-2' >Get Started</h3>
                      </div>
                  </div>
              </form>
          </div>
          </div>
        </div>
        <section className='mt-[45px] sm:mt-[165px] lg:mt-[120px] xl:mt-[0px]' >
          <div className='flex bg-black text-white mt-2 flex-col items-center sm:flex-row'>
            <div className='flex flex-col items-center pt-44 gap-6 w-[50%]'>
              <h1 className='text-5xl font-bold'>Enjoy on your TV</h1>
              <h3 className='text-3xl font-serif text-center px-14'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div>
            <div className=''>
              <img src={TV} alt="tv-photo" />
            </div>
          </div>
          <div className='flex flex-col-reverse items-center bg-black text-white mt-2 sm:flex-row-reverse'>
            <div className='flex flex-col justify-center pt-36 gap-6 w-[55%] px-8 '>
              <h1 className='text-5xl font-bold text-center'>Download your shows to watch offline</h1>
              <h3 className='text-3xl font-serif text-center px-14'>Save your favourites easily and always have something to watch.</h3>
            </div>
            <div className='w-[45%]'>
              <img src={Mobile} alt="tv-photo" />
            </div>
          </div>
          <div className='flex flex-col items-center bg-black text-white mt-2 sm:flex-row'>
            <div className='flex flex-col items-center pt-44 gap-6 w-[50%]'>
              <h1 className='text-5xl font-bold'>Watch everywhere</h1>
              <h3 className='text-3xl font-serif text-center px-14'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div>
            <div className=''>
              <img src={appletv} alt="tv-photo" />
            </div>
          </div>
          <div className='flex flex-col items-center bg-black text-white mt-2 sm:flex-row'>
            <div className='flex flex-col items-center pt-44 gap-6 w-[50%]'>
              <h1 className='text-5xl font-bold'>Create profiles for kids</h1>
              <h3 className='text-3xl font-serif text-center px-14'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
            </div>
            <div className=''>
              <img src={childrenphoto} alt="tv-photo" />
            </div>
          </div>    
        </section>

        <section>
          <div className='flex flex-col items-center gap-8 mt-2 bg-black text-white pt-3'>
            <h1 className='text-center text-5xl font-serif text-white block'>Frequently Asked Questions</h1>
            <div className='flex gap-11 justify-between w-[1000px] bg-[#333333] py-[25px] px-[30px] rounded-sm mt-3'>
              <h2 className='text-2xl font-bold'>What is Netflix?</h2>
              <h2 className='text-4xl -mt-2'>+</h2>
            </div>
            <div className='flex gap-11 justify-between w-[1000px] bg-[#333333] py-[25px] px-[30px] rounded-sm'>
              <h2 className='text-2xl font-bold'>How much does Netflix cost?</h2>
              <h2 className='text-4xl -mt-2'>+</h2>
            </div>
            <div className='flex gap-11 justify-between w-[1000px] bg-[#333333] py-[25px] px-[30px] rounded-sm'>
              <h2 className='text-2xl font-bold'>Where can I watch?</h2>
              <h2 className='text-4xl -mt-2'>+</h2>
            </div>
            <div className='flex gap-11 justify-between w-[1000px] bg-[#333333] py-[25px] px-[30px] rounded-sm'>
              <h2 className='text-2xl font-bold'>How do I cancel?</h2>
              <h2 className='text-4xl -mt-2'>+</h2>
            </div>
            <div className='flex gap-11 justify-between w-[1000px] bg-[#333333] py-[25px] px-[30px] rounded-sm'>
              <h2 className='text-2xl font-bold'>What can I watch on Netflix?</h2>
              <h2 className='text-4xl -mt-2'>+</h2>
            </div>
            <div className='flex gap-11 justify-between w-[1000px] bg-[#333333] py-[25px] px-[30px] rounded-sm'>
              <h2 className='text-2xl font-bold'>Is Netflix good for kids?</h2>
              <h2 className='text-4xl -mt-2'>+</h2>
            </div>
            <div className='mb-12 mt-4'>
            <form action="#">
                  <h3 className='text-xl font-semibold my-4 ml-2'>Ready to watch? Enter your email to create or restart your membership.</h3>
                  <div className='flex justify-center gap-5 m-8'>
                      <div className="left-input">
                          <input type="text" placeholder='Email address' className='border border-white rounded-md py-3 w-[410px] pl-3 bg-black opacity-75' />
                      </div>
                      <div className="right-button primary-button">
                          <h3 className='border border-black py-2.5 px-8  rounded-md bg-red-600 text-white text-2xl' >Get Started</h3>
                      </div>
                  </div>
              </form>
            </div>
          </div>
        </section>


        <Footer/>

    </div>
  )
}

export default Body