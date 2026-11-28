
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const Products = () => {
  const locationobj = useLocation()
  let bool = locationobj.pathname.startsWith('/adminportal')

  let [products, setProducts] = useState([])
  let [selectedCategory, setSelectedCategory] = useState("all")

  let fetchapi = async () => {
    let apidata = await axios.get('http://localhost:4000/products')
    setProducts(apidata.data)
  }

  useEffect(() => {
    fetchapi()
  }, [])

  const navigate = useNavigate()

  let handleViewmoreBtn = (id) => {
    {bool ? navigate(`/adminportal/viewmore/${id}`) : navigate(`/usersportal/viewmore/${id}`)}
  }

  // Filter Logic
  let filteredProducts = products.filter((elem) => {
    if (selectedCategory === "all") {
      return true
    }
    return elem.category === selectedCategory 
  })

  return (
    <div className="products-container">

      <div className="head">
        <h1>All Products</h1>
        {bool && <button onClick={() => navigate(`/adminportal/addproducts`)}>
          Add Product
        </button>}
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">

        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        <button
          className={selectedCategory === "men's clothing" ? "active" : ""}
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Mens
        </button>

        <button
          className={selectedCategory === "women's clothing" ? "active" : ""}
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Womens
        </button>

        <button
          className={selectedCategory === "electronics" ? "active" : ""}
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>

        <button
          className={selectedCategory === "jewelery" ? "active" : ""}
          onClick={() => setSelectedCategory("jewelery")}
        >
          Jewelery
        </button>

      </div>

      {/* Display Filtered Products */}
      {filteredProducts.length > 0 ? (

        filteredProducts.map((elem, index) => {
          let { id, category, image, title, price, rating } = elem

          return (
            <div className="card" key={index}>

              <div className="category">{category}</div>

              <div className="image">
                <img src={image} alt={title} />
              </div>

              <div className="title">{title}</div>

              <div className="box">
                <div className="rating">
                  <div className="rate">⭐ {rating.rate}</div>
                  <div className="count">({rating.count})</div>
                </div>

                <div className="price">
                  ₹{Math.floor(price * 92.65)}.00/-
                </div>
              </div>

              <div className="btn">
                <button onClick={() => handleViewmoreBtn(id)}>
                  View More →
                </button>
              </div>

            </div>
          )
        })

      ) : (

        <h2>No Products Found</h2>

      )}

    </div>
  )
}

export default Products
