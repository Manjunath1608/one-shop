import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import PageNotFound from './Components/PageNotFound'
import ForgetPasswrod from './Pages/ForgetPasswrod'
import AdminPortal from './Components/Admin/AdminPortal'
import UsersPortal from './Components/Users/UsersPortal'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<AdminPortal/>} path='/adminportal/*'/>
        <Route element={<UsersPortal/>} path='/usersportal/*'/>



        <Route element= {<PageNotFound/>} path='/*'/>
        <Route element={<ForgetPasswrod/>} path='/forgot-password'/>

      </Routes>
    </>
  )
}

export default App
   