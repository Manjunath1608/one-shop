import React from "react";
import { NavLink } from "react-router-dom";

const UsersNavbar = () => {
  return (
    <>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/usersportal/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/usersportal/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/usersportal/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/usersportal/carts">Carts</NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UsersNavbar;
