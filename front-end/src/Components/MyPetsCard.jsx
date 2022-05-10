import { Card, Button } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MyPetsCards({ pet, index, setClickedPet }) {

  let navigate = useNavigate();

  function showMore(pet) {
    setClickedPet(pet);
    navigate("/showmore");
  }

  return (
    <>
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img className="img" variant="top" src={pet.uploadResult} />
        <Card.Body>
          <Card.Title>Name: {pet.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong>Adoption Status:</strong> {pet.adoptionStatus}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-around">
        <Button onClick={() => showMore(pet)}>Show More</Button>
        </Card.Body>
    
      </Card>
    </>
  );
}