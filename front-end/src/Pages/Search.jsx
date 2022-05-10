import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { Card, ListGroupItem, Alert, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Search({ setClickedPet }) {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [status, setStatus] = useState("");
  const [pets, setpets] = useState([]);
  const [adv, setAdv] = useState("");

  let navigate = useNavigate();

  function showMore(pet) {
    setClickedPet(pet);
    navigate("/showmore");
  }

  const handleSearch = () => {
    console.log()
    axios
      .get("http://localhost:3001/searchpet", {
        params: { type, name, weight, height, status },
      })
      .then((res) => {
        console.log(res)
        setpets([...res.data]);
      })
      .catch(function (error) {
        alert(error.response.data.message);
        setpets([]);
      });
  };




  return (
    <div className="m-5">
      <Form className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Group>
        {adv ? (
          <>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBaspicPassword"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasjicPassword"
              >
                <Form.Label>Adoption Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adoption Status"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicPasosword"
              >
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Height"
                  onChange={(e) => setheight(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBaskicPasswordk"
                as={Col}
              >
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Weight"
                  onChange={(e) => setweight(e.target.value)}
                />
              </Form.Group>
            </Row>
          </>
        ) : (
          ""
        )}
        <Button
          className="mb-3"
          variant="primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Advanced"
            onChange={(e) => setAdv(e.target.checked)}
          />
        </Form.Group>
      </Form>
      {!pets ? (
        <Alert className="m-5" variant="success">
          <Alert.Heading>Not found</Alert.Heading>
        </Alert>
      ) : (
        <>
          {
            <div className="cards">
              {pets.map((pet, index) => (
                <Card style={{ width: "18rem" }} key={index} className = "mb-3">
                  <Card.Img
                    className="img"
                    variant="top"
                    src={pet.uploadResult}
                  />
                  <Card.Body>
                    <Card.Title>Name: {pet.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <strong>Type:</strong> {pet.type}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Height:</strong> {pet.height}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Wheight:</strong> {pet.weight}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Adoption Status:</strong> {pet.adoptionStatus}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body className="buttons">
                    <Button onClick={() => showMore(pet)}>Show More</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          }
        </>
      )}
    </div>
  );
}
