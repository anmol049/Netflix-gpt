import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


function AppLayout() {
  

  return (
    <div className=''>
        <Outlet/>
        
    </div>
  )
}

export default AppLayout