import React from "react";
import { Table } from "react-bootstrap";

export default function UserTable({ users, onUserClick }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Biography</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const { firstname, lastName, phone, bio, email, role } = user;
          return (
            <tr key={index} onClick={() => onUserClick(user)} style={{ cursor :onUserClick ? 'pointer' : ''}}>
              <td>{index + 1}</td>
              <td>{firstname}</td>
              <td>{lastName}</td>
              <td>{phone}</td>
              <td>{bio}</td>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
