import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home  from '../../Pages/Home'
import Products from '../../Pages/Products'
import ViewMore from '../../Pages/ViewMore'

const UsersPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<ViewMore/>} path='/viewmore/:id'/>
      </Routes>
    </>
  )
}

export default UsersPortal
