import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found'
  }, [])
  return (
    <>
      <h1 style={{color:"red", textAlign:"center"}}>Page Not Found</h1>
      <Link to={'/'}>Go To Home Page</Link>
    </>
  )
}

export default PageNotFound
