import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ViewMore = () => {
  let params = useParams();
  let productid = params.id;
  const navigate = useNavigate();
  const locationobj = useLocation();
  let bool = locationobj.pathname.startsWith("/adminportal");


  let [oneProduct, setOneProduct] = useState({});
  let singleProductProduct = async () => {
    let singleProduct = await axios.get(
      `http://localhost:4000/products/${productid}`,
    );
    setOneProduct(singleProduct.data);
  };

  useEffect(() => {
    singleProductProduct();
  }, []);

  let { id, title, description, category, image, price, rating } = oneProduct;

  let handleDelete = async () => {
    let bool = window.confirm(`Do you want to delelte this product?`);
    if (bool) {
      await axios.delete(`http://localhost:4000/products/${productid}`);
      toast.info(`Product is delete`);
      navigate(`/adminportal/products`);
    } else {
      toast.warn(`Product is not Deleted`);
    }
  };
  
  let handlecart = async () => {
    try {
      const product = await axios.get(
        `http://localhost:4000/products/${productid}`,
      );
      await axios.post("http://localhost:4000/carts", product.data);
      toast.info("Product added to cart");
      // navigate("/usersportal/carts");
    } catch (error) {
      toast.error(`Could not add product to cart: ${error.message}`);
    }
  }

  let handleclose = () =>{
    {
      bool
        ? navigate(`/adminportal/products`)
        : navigate(`/usersportal/products`);
    }
  }

  return (
    <>
      <div className="viewmore">
        <div className="card-container">
          <div className="close">
            <button onClick={handleclose}>
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
              <div className="price">₹{Math.floor(price * 92.65)}.00/-</div>
            </div>
            {bool ? 
            <div className="btn">
              <button onClick={handleDelete}>Delete</button>
            </div>
            :
            <div className="btn">
              <button onClick={handlecart}>Add Cart</button>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
