import React from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'

const HomePAge = () => {
  return (
    <>
    <section className='w-full h-screen flex'>
        <div className='w-16 h-screen border-r-border-r-grey-300'>
            <SideBar/>
        </div>
        <div className='w-full h-screen px-4 py-2'> 
            <NavBar/>
        </div>
    </section>
    </>
  )
}

export default HomePAge
