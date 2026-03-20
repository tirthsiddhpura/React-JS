import React from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import Gallary from '../Components/Gallary'

const HomePAge = () => {
  return (
    <>
    <section className='w-full h-screen flex'>
        <div className='w-16 h-screen border-r-border-r-grey-300'>
            <SideBar/>
        </div>
        <div className='w-full h-screen py-3'> 
            <NavBar/>
            <section className='px-10 flex flex-col items-center justify-center mt-12 mx-auto'>
            <HeroSection />
            <Gallary />
            </section>
        </div>
    </section>
    </>
  )
}

export default HomePAge
