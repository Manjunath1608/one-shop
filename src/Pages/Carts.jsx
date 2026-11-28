import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:4000/carts");
      setProducts(response.data);
    } catch (error) {
      toast.error(`Could not load cart: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="products-container">
      <div className="head">
        <h1>Your Cart</h1>
      </div>
      {products.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        products.map((product) => (
          <div className="card" key={product.id}>
            <div className="category">{product.category}</div>
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="title">{product.title}</div>
            <div className="price">
              ₹{Math.floor(product.price * 92.65)}.00/-
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Carts;
