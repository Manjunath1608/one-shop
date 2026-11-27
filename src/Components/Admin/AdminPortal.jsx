import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Products from '../../Pages/Products'
import ViewMore from '../../Pages/ViewMore'
import AddProducts from './AddProducts'
import Users from './Users'
import AddUsers from './AddUsers'

const AdminPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<ViewMore/>} path='/viewmore/:id'/>
        <Route element={<AddProducts/>} path='/addproducts'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<AddUsers/>} path='/addusers' />
      </Routes>
    </>
  )
}

export default AdminPortal
