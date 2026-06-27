import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import About from '../pages/About'
import Contect from '../pages/COntect'
import Navbar from '../components/Navbar'

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contect/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
     
    </>
  )
}

export default AppRoutes
