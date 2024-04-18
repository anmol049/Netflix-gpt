import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Netflix_Logo_PMS from './Netflix_Logo_PMS.png'
import { searchvalue } from '../redux/slice/gptSearchslice';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase'
import { languageArray } from '../utils/constants';
import { setLanguage } from '../redux/slice/configSlice';


function BrowseNavBar() {
  const userdata = useSelector((store)=>store.userinfo)
  const issearch = useSelector((store)=>store.search.issearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSelectChange(e){
    dispatch(setLanguage(e.target.value))

  }


  function handleSearchClick(){
    dispatch(searchvalue())
  }

  function handlesignout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error')
      // An error happened.
    });

  }
  return (

    <div className='flex justify-between  bg-black w-screen min-w-[420px]  sm:min-w-screen '>
              <div className='flex gap-14'>
                <img src={Netflix_Logo_PMS} alt="netflix logo" className='w-[150px] mt-[0px] sm:w-[200px] h-[100px]'  />
                {!issearch&&
                <ul className='hidden gap-9 text-xl font-bold mt-8 lg:flex'>
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>New & popular</li>
                  <li>My List</li>
                </ul>
                }
              </div>
              {userdata&&
              <div className='flex mt-2 gap-6 sm:mr-1  justify-end' >
                {issearch?(
                    <select name="select Language" id="" className='bg-white text-black mt-5 mb-9 px-4 hidden sm:block' onChange={handleSelectChange}>
                        {languageArray.map((obj)=><option value={obj.identifier} key={obj.identifier}>{obj.name}</option>)}
                    </select>
                ):(<div>
                  <button className='bg-white text-black px-6 py-1 mt-5 mb-9 rounded-md text-lg hidden lg:block' onClick={handleSearchClick}>Search</button>
                  <h1 className='lg:hidden text-3xl mt-4 mr-2' onClick={handleSearchClick}><i class="fa-solid fa-magnifying-glass"></i></h1>
                </div>)
                
                
                }
                <img src={userdata.photoURL} alt="profile-photo"  className='w-[48px] sm:w-[50px] h-[50px] hidden sm:block rounded-3xl mt-3'/>
                <h1 className='mt-5 lg:mt-4 text-white hidden sm:block'>{userdata.displayName}</h1>
                <button className= "bg-red-600 font-bold text-white mt-4 lg:mt-2 mb-9 lg:mb-10 mr-4 rounded-md block px-2" onClick={handlesignout}>signOut</button>
              </div>}
            </div>
  )
}

export default BrowseNavBar