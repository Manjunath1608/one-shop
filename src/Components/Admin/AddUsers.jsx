import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUsers = () => {
  const navigate = useNavigate();

  let [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    password: "",
    dateofbirth: "",
    place: "",
  });

  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    setFormData({
      ...formdata,
      [key]: val,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formdata);

    try {
      let response = await axios.post("http://localhost:4000/users", formdata);

      console.log(response.data);

      toast.success("User Registered Successfully");

      setFormData({
        firstname: "",
        lastname: "",
        contact: "",
        email: "",
        password: "",
        dateofbirth: "",
        place: "",
      });

      navigate("/adminportal/users");
    } catch (error) {
      console.log(error);
      toast.error(`Network Issue: ${error.message}`);
    } finally {
      console.log("Done");
    }
  };
  let handleClose = () => {
    navigate(`/adminportal/users`);
  };

  return (
    <>
      <div className="add-users">
        
        <div className="head">
          <h2>Add User Details :</h2>
          <div className="close">
            <button onClick={handleClose}>Back</button>
          </div>
        </div>

        <div className="formbox">
          <form onSubmit={handleSubmit}>
            <label>
              User Name :
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                onChange={handleInput}
                value={formdata.firstname}
                required
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastname"
                onChange={handleInput}
                value={formdata.lastname}
                required
              />
            </label>

            <label>
              Contact Number :
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                pattern="[6-9][0-9]{9}"
                name="contact"
                onChange={handleInput}
                value={formdata.contact}
                required
              />
            </label>

            <label>
              Email Address :
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={formdata.email}
                placeholder="Enter Email Address"
                required
              />
            </label>

            <label>
              Password :
              <input
                type="password"
                onChange={handleInput}
                name="password"
                placeholder="Enter Password"
                value={formdata.password}
                required
              />
            </label>

            <label>
              Date of birth :
              <input
                type="date"
                onChange={handleInput}
                name="dateofbirth"
                value={formdata.dateofbirth}
                required
              />
            </label>

            <label>
              Place :
              <input
                type="text"
                onChange={handleInput}
                placeholder="Enter the place"
                name="place"
                value={formdata.place}
                required
              />
            </label>

            <button type="submit">Add Users</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
