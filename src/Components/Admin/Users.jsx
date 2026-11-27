import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";

const Users = () => {
  const Navigate = useNavigate();
  const [users, setUsers] = useState([]);

  let fecthUsersApi = async () => {
    let usersapi = await axios.get(`http://localhost:4000/users`);
    setUsers(usersapi.data);
  };

  useEffect(() => {
    fecthUsersApi();
  }, []);
//   console.log(users);
  let handleDelete = async (userID, fnm) => {
    let bool = window.confirm(`Do you want to delete ${fnm}'s data`)
    if (bool) {
        await axios.delete(`http://localhost:4000/users/${userID}`)

        // todo : Without 
        
        await fecthUsersApi()
        toast.success(`${fnm}'s data is Deleted`)
    } else {
        toast.info(`${fnm}'s data is not Deleted`)
    }
  }
  return (
    <>
      <div className="users">
        <div className="head">
          <h1>Users</h1>
          <button onClick={() => Navigate(`/adminportal/addusers`)}>
            Add Users
          </button>
        </div>
      </div>
      <div className="display-users">
        {users.length !== 0 ? <table border={2}>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Password</th>
              <th>Place</th>
              <th>Date Of Birth</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem, index)=>{
                let {id, firstname, lastname, contact, email, password, place, dateofbirth} = elem
                return (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{firstname} {lastname}</td>
                        <td>{contact}</td>
                        <td>{email}</td>
                        <td onClick={()=>alert(password)}><b>********</b></td>
                        <td>{place}</td>
                        <td>{dateofbirth}</td>
                        <td>{new Date().getFullYear() - dateofbirth.slice(0,4)}</td>
                        <td><DeleteIcon className="dlt" onClick={()=>handleDelete(id, firstname)}/></td>
                    </tr>
                )
            })}
          </tbody>
        </table>
        :
        <>
            <h1 className="nodata">No Users Data</h1>
        </>
        }
      </div>
    </>
  );
};

export default Users;
