import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import NavBar from './Layout/NavBar'
import Footer from './Layout/Footer'
import Shop from './Pages/Shop'
import Collection from './Pages/Collection'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'


const App = () => {
  return (
   <>
   <NavBar />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/collection'element={<Collection />} />
      <Route path='/shop'element={<Shop />} />
      <Route path='/shop/:collection' element={<Shop />} />
      <Route path='/product/:id' element={<Product />}/>
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />

    </Routes>

   
   <Footer />

   </>
  )
}

export default App