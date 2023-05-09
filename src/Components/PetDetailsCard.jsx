import React from "react";
import { useSelector } from "react-redux";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Buttons from "./Buttons";

function PetCard({ pet, index = 0, otherButtons, smallCard = false }) {
  const {
    type,
    name,
    biography,
    dietary,
    breed,
    height,
    weight,
    hypo,
    color,
    adoptionStatus,
    uploadResult,
  } = pet;

  const { userDetails } = useSelector((state) => state.auth);

  return (
    <Card style={{ width: "18rem" }} key={index}>
      <Card.Img className="img" variant="top" src={uploadResult} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>{biography}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {!smallCard &&<>
        <ListGroupItem><strong>Type:</strong> {type}</ListGroupItem>
        <ListGroupItem><strong>Dietary Restriction:</strong> {dietary}</ListGroupItem>
        <ListGroupItem><strong>Breed:</strong> {breed}</ListGroupItem>
        <ListGroupItem><strong>Height:</strong> {height}</ListGroupItem>
        <ListGroupItem><strong>Weight:</strong> {weight}</ListGroupItem>
        <ListGroupItem><strong>Hypoallergenic (optional):</strong> {hypo}</ListGroupItem>
        <ListGroupItem><strong>Color:</strong> {color}</ListGroupItem>
        </>}
        <ListGroupItem><strong>Adoption Status:</strong> {adoptionStatus}</ListGroupItem>
      </ListGroup>
      {userDetails && !otherButtons && (
        <Card.Body className="buttonsOfShowPet">
          <Buttons pet={pet} dataOfUser={userDetails} />
        </Card.Body>
      )}
        {otherButtons && 
        <Card.Body className="buttonsOfShowPet">
        {otherButtons}
        </Card.Body>}
    </Card>
  );
}

export default PetCard;
