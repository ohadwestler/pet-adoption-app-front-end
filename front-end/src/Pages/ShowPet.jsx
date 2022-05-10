import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import Buttons from "../Components/Buttons";

export default function ShowPet({clickedPet, auth, dataOfUser}){
    const [getPet, setGetPet] = useState("")
    const [render,setRender] = useState("")

useEffect(()=>{axios.get(`http://localhost:3001/pet/${clickedPet.petsId}`).then(res=>setGetPet({...res.data[0]})).catch((err=>alert(err.response.data.message)))
},[render])

    return (
        <div className="d-flex justify-content-center m-4">
            <Card style={{ width: "18rem" }}> 
              <Card.Img className="img" variant="top" src={getPet.uploadResult}/>
              <Card.Body>
                <Card.Title>Name:{getPet.name}</Card.Title>
                <Card.Text>Bio:{getPet.biography}</Card.Text>
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
              <Card.Body className="buttonsOfShowPet">
                {auth?
               <Buttons pet = {getPet} dataOfUser={dataOfUser} setRender = {setRender}/>:""}
              </Card.Body>
            </Card>
        </div>
    )
}