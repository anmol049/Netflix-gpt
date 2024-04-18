import React from 'react'
import { Link } from 'react-router-dom'
import Netflix_Logo_PMS from './Netflix_Logo_PMS.png'

function Header() {
  return (
    <div className='flex justify-between mt-5'>
        <div>
            <img src={Netflix_Logo_PMS} alt="netflix logo" className='w-[300px]' />
        </div>
        <div>
            <Link to='/login'><button className='border border-red-700 text-white px-3 bg-red-700 mr-9 mt-9'>Sign In</button></Link>
        </div>
    </div>
  )
}
// https://www.shutterstock.com/image-vector/kuningan-indonesia-may-8-2023-260nw-2300098757.jpg

export default Header