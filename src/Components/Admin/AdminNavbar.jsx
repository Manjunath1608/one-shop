import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/adminportal/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/adminportal/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/adminportal/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;
