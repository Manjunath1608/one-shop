import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AdminNavbar from './Admin/AdminNavbar'
import UsersNavbar from './Users/UsersNavbar'

const Navbar = () => {
  const location =  useLocation()
  let path = location.pathname
  return (
    <>
        <div className="navbar">
            <div className="logo">LOGO</div>
            <AdminNavbar/>
            <UsersNavbar/>
        </div>
    </>
  )
}

export default Navbar
