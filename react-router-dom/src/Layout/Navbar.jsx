import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
   <>
   <section className='flex items-center justify-center mt-10'>
    <nav className='bg-black/60 backdrop-blur-sm text-white px-4 py-2 flex items-center justify-between fixed rounded-full w-[80%]'>
        <h1 className='text-xl font-bold px-8'>Company Name</h1>

        <ul className='flex items-center justify-between gap-x-4 text-lg font-medium'>
            <li className='hover:bg-black rounded-2xl px-3 py-1.5 transition-all duration-300'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:bg-black rounded-2xl px-3 py-1.5 transition-all duration-300'>
                <Link to="/product">Product</Link>
            </li>
            <li className='hover:bg-black rounded-2xl px-3 py-1.5 transition-all duration-300'>
                <Link to="/about">About Us</Link>
            </li>
            <li className='hover:bg-black rounded-2xl px-3 py-1.5 transition-all duration-300'>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    </nav>
   </section>
   </>
  )
}

export default Navbar