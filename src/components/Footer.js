import React from 'react'


function Footer() {
  return (
    <div className='footer-containor text-white bg-black h-[450px]  mt-2 sm:h-[400px]'>
        <h1 className='p-5 ml-3'>Questions?Call - 000-800-919-1694 </h1>
        <div className="footer-list flex  ml-8 mt-4 gap-6 sm:gap-44">
            <div className="first-list flex flex-col gap-5">
                <p>FAQ</p>
                <p>Media Center</p>
                <p>Ways to Watch</p>
                <p>Cookie Prefrences</p>
                <p>Speed Test</p>
            </div>
            <div className="second-list flex flex-col gap-5">
                <p>Help Center</p>
                <p>Investor Relations</p>
                <p>Terms of Use</p>
                <p>Corporate Information</p>
                <p>Legal Notices</p>
            </div>
            <div className="third-list flex flex-col gap-5">
                <p>Account</p>
                <p>Jobs</p>
                <p>Privacy</p>
                <p>Contact Us</p>
                <p>only on netfli</p>
            </div>
        </div>
        <div className="select-cities text-white bg-black m-8">
              <select name="" id="" className="bg-black border border-white px-2">
                 <option value="">English</option>
                 <option value="">Français</option>
              </select>
        </div>
        <p className='m-8'>Netflix India</p>      
    </div>
  )
}

export default Footer