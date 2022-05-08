import axios from "axios";
import React, { useState } from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

export default function ShowPet({editPet}){
    const [getPet, setGetPet] = useState("")

axios.get(`http://localhost:3001/pet/${editPet.petsId}`).then(res=>setGetPet({...res.data[0]})).catch((err=>alert(err.response.data.message)))

    return (
        <div className="d-flex justify-content-center m-4">
            <Card style={{ width: "18rem" }}> 
              <Card.Img className="img" variant="top" src={getPet.uploadResult}/>
              <Card.Body>
                <Card.Title>Name:{getPet.namePets}</Card.Title>
                <Card.Text>{getPet.biography}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Type:</strong> {getPet.type}</ListGroupItem>
                <ListGroupItem><strong>Dietary Restriction:</strong> {getPet.dietary}</ListGroupItem>
                <ListGroupItem><strong>Breed:</strong> {getPet.breed}</ListGroupItem>
                <ListGroupItem><strong>Height:</strong> {getPet.height}</ListGroupItem>
                <ListGroupItem><strong>Wheight:</strong> {getPet.weight}</ListGroupItem>
                <ListGroupItem><strong>Hypoallergenic?:</strong> {getPet.hypo}</ListGroupItem>
                <ListGroupItem><strong>Color:</strong> {getPet.color}</ListGroupItem>
                <ListGroupItem><strong>Adoption Status:</strong> {getPet.adoptionStatus}</ListGroupItem>
              </ListGroup>
              <Card.Body>
               
              </Card.Body>
            </Card>
        </div>
    )
}