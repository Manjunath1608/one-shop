import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts = () => {
  const navigate = useNavigate();
  let [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });
  let handleClose = () => {
    navigate(`/adminportal/products`);
  };
  let handleinput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    // console.log(key , value)

    if (key === "rate" || key === "count") {
      setFormData({
        ...formData,
        rating: {
          ...formData.rating,
          [key]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [key]: value,
      });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      let updatedProduct = {
        ...formData,
        price: Number(formData.price),
        rating: {
          rate: Number(formData.rating.rate),
          count: Number(formData.rating.count),
        },
      };
      axios.post(`http://localhost:4000/products/`, updatedProduct);
      toast.success("Product is Added");

      setFormData({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
          rate: "",
          count: "",
        },
      });
      navigate(`/adminportal/products`)
    } catch (error) {
      toast.error("Network Error");
    } finally {
      console.log("Task is completed");
    }
  };

  return (
    <>
      <div className="add-products">
        <div className="head">
          <h1>Add Products</h1>
          <div className="close">
            <button onClick={handleClose}>Back</button>
          </div>
        </div>

        <div className="formbox">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
              Title :
              <input
                type="text"
                placeholder="Enter Product Title"
                onChange={handleinput}
                name="title"
                value={formData.title}
                required
              />
            </label>

            <label htmlFor="">
              Price :
              <input
                type="text"
                placeholder="Enter Price"
                onChange={handleinput}
                name="price"
                value={formData.price}
                required
              />
            </label>

            <label htmlFor="">
              Description :
              <textarea
                placeholder="Enter Description"
                onChange={handleinput}
                name="description"
                value={formData.description}
                required
              ></textarea>
            </label>

            <label htmlFor="">
              Category :
              <select
                name="category"
                onChange={handleinput}
                value={formData.category}
                required
              >
                <option value="">Select Category</option>
                <option value="men's clothing">MENS</option>
                <option value="jewelery">JEWELERY</option>
                <option value="electronics">ELECTORINCS</option>
                <option value="women's clothing">WOMENS</option>
              </select>
            </label>

            <label htmlFor="">
              Image :
              <input
                type="text"
                placeholder="Enter Product Image / path"
                onChange={handleinput}
                name="image"
                value={formData.image}
                required
              />
            </label>

            <label htmlFor="">
              Rate :
              <input
                type="text"
                placeholder="Enter Rating"
                onChange={handleinput}
                name="rate"
                value={formData.rating.rate}
                required
              />
            </label>

            <label htmlFor="">
              Count :
              <input
                type="text"
                placeholder="Enter Count"
                onChange={handleinput}
                name="count"
                value={formData.rating.count}
                required
              />
            </label>

            <button>Add Product</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
