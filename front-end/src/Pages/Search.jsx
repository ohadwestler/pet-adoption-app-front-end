import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { Card, ListGroupItem, Alert, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Search({ setEditPet, auth, dataOfUser }) {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [status, setStatus] = useState("");
  const [pets, setpets] = useState([]);
  const [savedPets, setSavedPets] = useState([])
  const [render,setRender] = useState([])
  const [adv, setAdv] = useState("");
  let navigate = useNavigate();
  function showMore(pet) {
    setEditPet(pet);
    navigate("/showmore");
  }

  useEffect(() => {
    if(auth)
  {axios.get(`http://localhost:3001/pet/user`).then((res) => {
      if(res.data.resultOfSaved)
     {  console.log(res.data.resultOfSaved)
        setSavedPets([...res.data.resultOfSaved])}

    }).catch(err=>{if(auth)alert(err.response.data.message)})
  }}, [render]);

  async function unSaveIt(pet) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/pet/${pet.petsId}/save`
      )
      setRender(response)
      console.log(response)
    } catch (e) {
      alert(e.response.data.message)
    }
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

  function save(pet) {
    axios
      .post(`http://localhost:3001/pet/${pet.petsId}/save`)
      .then((res) =>setRender(res)
      ).catch(err=>alert(err.response.data.message));
  }
  function adopt(pet) {
    axios
      .post(`http://localhost:3001/pet/${pet.petsId}/adopt`)
      .then((res) => setpets([...res.data]))
      .catch(err=>alert(err.response.data.message))
  }
  function foster(pet) {
    axios
      .post(`http://localhost:3001/pet/${pet.petsId}/foster`)
      .then((res) => setpets([...res.data]))
      .catch(err=>alert(err.response.data.message))

  }
  function makeAvailable(pet) {
    axios
      .post(`http://localhost:3001/pet/${pet.petsId}/return`)
      .then((res) => setpets([...res.data]))
      .catch(err=>alert(err.response.data.message))

  }

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
                  <Card.Body className="buttons">
                    {auth ? (
                      <>
                        {savedPets.find((val)=> val.petsId == pet.petsId) != null ? (
                <Button onClick={() => unSaveIt(pet)}>Unsave oet</Button>
              ) : (
                <Button onClick={() => save(pet)}>Save pet</Button>
              )}


                        {pet.adoptionStatus === "Available" ? (
                          <>
                            <Button onClick={() => foster(pet)}>Foster</Button>
                            <Button onClick={() => adopt(pet)}>Adopt</Button>
                          </>
                        ) : (
                          ""
                        )}

                        {pet.adoptionStatus === "Adopted" &&
                        dataOfUser.email === pet.owner ? (
                          <>
                            <Button onClick={() => makeAvailable(pet)}>
                              return pet
                            </Button>
                          </>
                        ) : (
                          ""
                        )}

                        {pet.adoptionStatus === "Fostered" &&
                        dataOfUser.email === pet.owner ? (
                          <>
                            <Button onClick={() => makeAvailable(pet)}>
                              return pet
                            </Button>
                            <Button onClick={() => adopt(pet)}>Adopt</Button>
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )}
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
