import React, { useRef, useState } from 'react'
import Netflix_Logo_PMS from '../components/Netflix_Logo_PMS.png'
import { validation } from '../utils/validation';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import {adduser} from '../redux/slice/userslice'
import { profile_photo } from '../utils/constants';



function LoginPage() {
  const [issignin,setissignin] = useState(true);
  const [error,seterror] = useState();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  function handlesignupclick(){
    setissignin(!issignin)
  }

  function handlelogin(){

    // const inputname = username.current.value;
    const inputemail = email.current.value;
    const inputpassword = password.current.value;
    const errormessage = validation(inputemail,inputpassword)
    seterror(errormessage);
    if  (errormessage) return;
    if(!issignin){
      createUserWithEmailAndPassword(auth, inputemail, inputpassword)
  .then((userCredential) => {
    const user = userCredential.user;
    // Signed up 
    updateProfile(auth.currentUser, {
      displayName: username.current.value , photoURL: profile_photo
    }).then(() => {
      const {displayName,email,uid,photoURL} = auth.currentUser;
      dispatch(adduser({displayName:displayName,email:email,uid:uid,photoURL:photoURL}))

      // Profile updated!
      // navigate('/browse')
    }).catch((error) => {
      seterror(error)
      // An error occurred
    });

    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode + "-" + errorMessage)
  });

    }
    else{
      signInWithEmailAndPassword(auth, inputemail, inputpassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode + " - " + errorMessage)
  });

    }


  }
  return (
    <div className='sm:h-[103.1rem] h-[125rem] w-[910px] text-white  relative bg-black border-2 border-black sm:w-screen md:h-screen'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background-image" className='h-[101rem] w-0 sm:w-screen  sm:h-[823px]'/>
      <div className='absolute top-0 bg-gradient-to-r from-black w-screen h-[101rem] sm:h-[825px]'>
            <img src={Netflix_Logo_PMS} alt="netflix logo" className='w-[300px]' />
            <div className="login-form absolute top-[100px] left-[40px] border border-black flex flex-col items-start sm:items-center bg-black  bg-opacity-80 rounded-2xl gap-[14px] sm:top-[140px] xl:left-[35%] sm:left-[30%] md:left-[30%] lg:left-[35%] sm:gap-0 w-[800px] sm:w-[400px] ">
              
                <h1 className='text-8xl sm:text-3xl text-white font-bold mt-14 text-left '>{issignin?"Sign In":"signUp"}</h1>
                {!issignin && (
                  <input type="text" placeholder='enter full name' className='border border-white sm:border-black w-[800px] text-5xl sm:text-base sm:w-[350px] py-8 bg-black sm:bg-white  sm:py-2 mt-8 px-4 text-white sm:text-black rounded-md' ref={username}/>
                )}
                <input type="text" placeholder='Email or phone number'  className='border border-white sm:border-black w-[800px] text-5xl sm:text-base sm:w-[350px] py-8 bg-black sm:bg-white  sm:py-2 mt-12 px-4 text-white sm:text-black rounded-md' ref={email}/>
                <input type="password" placeholder='Password' className='border border-white sm:border-black w-[800px] text-5xl sm:text-base sm:w-[350px] py-8 bg-black sm:bg-white  sm:py-2 mt-8 px-4 text-white sm:text-black rounded-md' ref={password}/>
                <p className='text-red-500 mt-5'>{error}</p>
                <button className='text-white bg-red-700 px-4 py-6 sm:py-2 mt-1 sm:mt-5 rounded-md w-[800px] sm:w-[100px] text-5xl sm:text-xl' onClick={handlelogin}>{issignin?"Sign In":"SignUp"}</button>
              
                <h1 className='text-white mt-6 sm:mt-3 text-4xl sm:text-base mx-auto'>Forgot password?</h1>
                <h1 className='my-20 cursor-pointer mx-auto text-4xl sm:text-base ' onClick={handlesignupclick}>{issignin?("New to Netflix? SignUp now."):("Already have a account? SignIn now")}</h1>
            </div>
      </div>
            
                
    </div>
  )
}
export default LoginPage