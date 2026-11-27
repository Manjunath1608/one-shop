import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewMore = () => {
    let params = useParams()
    let productid = params.id
    console.log(params)
    console.log(productid)

    const navigate = useNavigate()

    let [oneProduct, setOneProduct] = useState({})
    let singleProductProduct = async () =>{
      let singleProduct = await axios.get(`http://localhost:4000/products/${productid}`)
      setOneProduct(singleProduct.data)
    }

    useEffect(()=>{
      singleProductProduct()
    } , [])
    
    let {id , title, description, category, image, price, rating} = oneProduct

    let handleDelete = async () => {
      let bool = window.confirm(`Do you want to delelte this product?`)
      if (bool) {
        await axios.delete(`http://localhost:4000/products/${productid}`)
        toast.info(`Product is delete`)
        navigate(`/adminportal/products`)
      } else {
        toast.warn(`Product is not Deleted`)
      }
    }

  return (
    <>
      <div className="viewmore">
        <div className="card-container">
          <div className="close">
            <button onClick={()=>navigate(`/adminportal/products`)}>
              ❌
            </button>
          </div>
          <div className="left-container">
            <div className="category">{category}</div>
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="right-container">
            <div className="title">{title}</div>
            <div className="desc">{description}</div>
            <div className="box">
              <div className="rating">
                <div className="rate">{rating?.rate}</div>
                <div className="count">{rating?.count}</div>
              </div>
              <div className="price">₹{Math.floor(price*92.65)}.00/-</div>
            </div>
            <div className="btn">
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewMore
