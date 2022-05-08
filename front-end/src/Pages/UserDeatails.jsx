import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
export default function UserDeatails({ userClicked, dataOfUser }) {
  console.log(userClicked);
    const [admin, setAdmin] = useState(dataOfUser.email)
  const [email,setEmail] = useState(userClicked.email)
  const [userPets, setUserPets] = useState([])
  useEffect(()=>{
axios.get(`http://localhost:3001/pet/user/${email}/full`).then(res=>setUserPets([...res.data.resultOfUserPets])).catch((err=>alert(err.response.data.message)))
  },[])
  return (
    <div className="m-3 overflow-auto">
         <div>
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>phone</th>
            <th>Biography</th>
            <th>Email</th>
            <th>Role</th>

            
          </tr>
        </thead>
        <tbody>
          
           
            <tr>
               
                  <td>{userClicked.firstname}</td>
                  <td>{userClicked.lastName}</td>
                  <td>{userClicked.phone}</td>
                  <td>{userClicked.bio}</td>
                  <td>{userClicked.email}</td>
                  <td>{userClicked.role}</td>
                </tr>
              
            
        </tbody>
        </Table>
      </div>

      {!userPets.length ? (
        <Alert className="m-5" variant="success">
          <Alert.Heading>The user currently not owns any pets!</Alert.Heading>
        </Alert>
      ) : (<>
        <h1>{dataOfUser.firstname} owns:</h1>
        {userPets.map((pet, index) => {
          return (
            <div className="cards">
              <ListGroup horizontal>
                <Card style={{ width: "18rem" }} key={index}>
                  <Card.Img variant="top" src={pet.uploadResult} className="img" />
                  <Card.Body>
                    <Card.Title>Name:{pet.namePets}</Card.Title>
                    <Card.Text>{pet.biography}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <strong>Type:</strong> {pet.type}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Dietary Restriction:</strong> {pet.dietary}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Breed:</strong> {pet.breed}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Height:</strong> {pet.height}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Wheight:</strong> {pet.weight}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Hypoallergenic?:</strong> {pet.hypo}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Color:</strong> {pet.color}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Adoption Status:</strong> {pet.adoptionStatus}
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </ListGroup>
            </div>
          );
        })
      }</> )}
    </div>
 
     </div>
     )
    }