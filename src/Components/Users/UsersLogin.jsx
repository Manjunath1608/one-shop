import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UsersLogin = () => {
  const navigate = useNavigate()
  let [usersData, setUsersData] = useState([]);
  let fetchUsersApi = async () => {
    try {
      let userapi = await axios.get(`http://localhost:4000/users`);
    setUsersData(userapi.data);
    } catch (error) {
      toast.error(`Failed to fetch :${error}`)
    }
  };

  useEffect(() => {
    fetchUsersApi();
  }, []);

  // todo : collect all email from jsondata
  let AllUsersEmail = usersData.map((elem) => elem.email);

  // todo : collect all input values from the input field
  let [formData, setFormData] = useState({ email: "", password: "" });

  let handleinput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = formData;

    // todo : check the email / password is present or not in Database & target index value
    let emailIndex = AllUsersEmail.indexOf(email);
    // let passwordIndex = AllUsersPassword.indexOf(password)

    if (emailIndex !== -1) {
      if (usersData[emailIndex].password === password) {
        toast.success("Login Success");
        navigate('/usersportal')

        setFormData({ email: "", password: "" })
      } else {
        toast.error(`Invalid Password`);
      }
    } else {
      toast.error(`Invalid Email Address`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="User Email Address"
          onChange={handleinput}
          name="email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleinput}
          name="password"
          value={formData.password}
        />
        <button>User Login</button>
      </form>
    </>
  );
};

export default UsersLogin;
