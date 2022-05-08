import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function GetUsers({dataOfUser, setUserClicked}) {
  let navigatate = useNavigate()

  function displayUser(user){
    navigatate("/userdetails")
    setUserClicked(user)

  }
    console.log(dataOfUser)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/users`).then((res) => {
      setUsers([...res.data.result]);
    }).catch(err=>alert(err.response.data.message));
  }, []);

  return (
    <div className="users overflow-auto m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>phone</th>
            <th>Biography</th>
            <th>Email</th>
            <th>Role</th>

            
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user, index) => {
              return (
                <tr key={index} onClick={()=>displayUser(user)}>
                  <td>{index+1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phone}</td>
                  <td>{user.bio}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
