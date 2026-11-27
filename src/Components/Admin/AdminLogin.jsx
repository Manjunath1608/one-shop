import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  let [formData, setFormData] = useState({ email: "", password: "" });
  let [errMsz, setErrMsz] = useState("")

  const navigate = useNavigate()

  let handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    setFormData({
      ...formData,
      [key]: val,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target;
    let { email, password } = formData;
    let credentials = {
      admin_email: "Admin@gmail.com",
      admin_password: "Admin@123",
    };
    let { admin_email, admin_password } = credentials;

    let errorborder = "solid 2px red";
    let successborder = "solid 2px green"

    input[0].style.border = "";
    input[1].style.border = "";

    if (email === admin_email) {
      input[0].style.border = successborder;
      if (password === admin_password) {
        input[1].style.border = successborder;
        toast.success("Login is Success")
        // setErrMsz('') 
        setFormData({ email: "", password: "" })
        navigate('/adminportal')
      } else {
        input[1].style.border = errorborder;
        toast.error("Invalid Password")
        // setErrMsz("Invalid Password")

      }
    } else {
      input[0].style.border = errorborder;
      toast.error("Invalid Email")
      // setErrMsz("Invalid Email")
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Admin Email Address"
          onChange={handleInput}
          name="email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleInput}
          name="password"
          value={formData.password}
        />
        <h4 style={{color:'red'}}>{errMsz}</h4>
        <button>Admin Login</button>
      </form>
    </>
  );
};

export default AdminLogin;
