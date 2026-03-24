import React from 'react'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import SideBar from './Components/SideBar'


const App = () => {
  return (
    <>
    <SideBar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      </Routes>    
    </>
  )
}

export default App
