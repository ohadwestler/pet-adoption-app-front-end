import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";
export default function MyPetsCards({ pet, index, dataOfUser, auth ,setRender, saved }) {
  const [email, setEmail] = useState(dataOfUser.email);

  
  async function adoptIt(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/adopt`
      )
      setRender(response)
    } catch (e) {
        alert(e.response.data.message)
    }
  }
  async function returnAgency(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/return`
      )
      setRender(response)
    } catch (e) {
      console.log(e);
    }
  }

  async function unSaveIt(pet) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/pet/${pet.petsId}/save`,
      )
      console.log(response)
      setRender(response)
    } catch (e) {
        alert(e.response.data.message)
    }
  }

  async function fosteredIt(pet) {
    try {
      console.log(pet.petsId);
      console.log(email);
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/foster`
      )
      setRender(response)
    } catch (e) {
      console.log(e);
    }
  }
  async function saveIt(pet) {
    try {
      const response = await axios.post(
        `http://localhost:3001/pet/${pet.petsId}/save`
      )
      setRender(response)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="cards">
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img className="img" variant="top" src={pet.uploadResult} />
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
        <Card.Body className='d-flex justify-content-center'>
            <div>
          {auth ? (
            <>{saved ? (
                <Row className="mb-2"><Button onClick={() => unSaveIt(pet)}>unsave it</Button></Row>
              ) : (
               <Row className="mb-2"> <Button onClick={() => saveIt(pet)}>Save it</Button></Row>
              )}

              {pet.adoptionStatus === "Available" ? (
                <>
                <div className ="d-flex">
                  <Button className="btnOfFoster" onClick={() => fosteredIt(pet)}>Foster it</Button>
                  <Button onClick={() => adoptIt(pet)}>Adopt it</Button>
                  </div>
                </>
              ) : (
                ""
              )}

              {pet.adoptionStatus === "Adopted" &&
              dataOfUser.email === pet.owner ? (
                <>
                  <Button onClick={() => returnAgency(pet)}>
                    Cancell Adoption
                  </Button>
                </>
              ) : (
                ""
              )}

              {pet.adoptionStatus === "Fostered" &&
              dataOfUser.email === pet.owner ? (
                <>
                  <Button className="btnOfFoster" onClick={() => returnAgency(pet)}>
                    Cancell foster
                  </Button>
                  <Button onClick={() => adoptIt(pet)}>Adopt it</Button>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          </div>
        </Card.Body>
    
      </Card>
    </div>
  );
}