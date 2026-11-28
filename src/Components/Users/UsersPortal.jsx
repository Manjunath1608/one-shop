import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home  from '../../Pages/Home'
import Products from '../../Pages/Products'
import ViewMore from '../../Pages/ViewMore'
import About from '../../Pages/About'
import Carts from '../../Pages/Carts'

const UsersPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<ViewMore/>} path='/viewmore/:id'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Carts/>} path='/carts'/>
      </Routes>
    </>
  )
}

export default UsersPortal
