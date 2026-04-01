import React from 'react'
import ProductBar from '../Components/ProductBar'
import Hero from '../Components/Home/Hero'
import DeatilsBar from '../Components/DeatilsBar'
import CategoryBar from '../Components/CategoryBar'
import Offer from '../Components/Offer'
import DealCard from '../ui/DealCard'
import DealBar from '../Components/Home/DealBar'
import DiscontBar from '../Components/Home/DiscontBar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Layout/Footer'
import Shop from './Shop'
import { Contact } from 'lucide-react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
        <Hero />
        <DeatilsBar />
        <CategoryBar />
        <ProductBar />
        <Offer />
        <DealBar />
        <DiscontBar />
        <Newsletter />
        <Shop />
        <AboutUs />
        <ContactUs />
       
    
    </>
  )
}

export default Home