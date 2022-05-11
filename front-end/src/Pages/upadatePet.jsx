import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup, Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { Alert, Spinner } from "react-bootstrap";

export default function AddPet({ clickedPet }) {
  let navigate = useNavigate();
  const [id, setId] = useState(clickedPet.petsId);
  const [validated, setValidated] = useState(false);
  const [type, setType] = useState(clickedPet.type);
  const [color, setColor] = useState(clickedPet.color);
  const [diet, setDiet] = useState(clickedPet.dietary);
  const [weight, setweight] = useState(clickedPet.weight);
  const [name, setName] = useState(clickedPet.name);
  const [height, setheight] = useState(clickedPet.height);
  const [status, setStatus] = useState(clickedPet.adoptionStatus);
  const [bread, setBread] = useState(clickedPet.breed);
  const [elergy, setElergy] = useState(clickedPet.hypo);
  const [bio, setBio] = useState(clickedPet.biography);
  const [image, setImage] = useState(clickedPet.uploadResult);
  const [error, setError] = useState(false);
  const [spinner, setSpinner] = useState("none");


  async function handleSubmit(event) {
    setSpinner("grow");
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("type", type);
      formData.append("name", name);
      formData.append("height", height);
      formData.append("weight", weight);
      formData.append("color", color);
      formData.append("elergy", elergy);
      formData.append("bread", bread);
      formData.append("diet", diet);
      formData.append("status", status);
      formData.append("bio", bio);

      const response = await axios.put(
        `http://localhost:3001/updatePet/${id}`,
        formData
      );
      setError("");
      alert("Update is done!");
      setName("");
      setType("");
      setColor("");
      setDiet("");
      setweight("");
      setheight("");
      setStatus("");
      setBread("");
      setBio("");
      setElergy("");
      navigate("/pets");
      setSpinner("none");
    } catch (err) {
      setSpinner("none");
      console.log(err);
      setError(err.response.data.message);
      if (err.response.data[0]) {
        setError(
          `${err.response.data[0].instancePath.replace("/", "")} ${
            err.response.data[0].message
          }`
        );
      } else {
        setError(err.response.data.message);
      }
    }
  }
  function deletePet(){
    if(window.confirm("Are you sure you want to delete?")){
      axios.delete(`http://localhost:3001/deletepet/${id}`).then(()=>{
      alert("Deleted from system")
      navigate("/pets")})

    }
  }

  return (
    <div>
      <Form
        className="m-5"
        noValidate
        validated={validated}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Type</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom045">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Bread </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Bread"
              value={bread}
              onChange={(e) => setBread(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Weight </Form.Label>
            <Form.Control
              type="number"
              placeholder="weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Height </Form.Label>
            <Form.Control
              type="number"
              placeholder="Height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center">
      <Spinner animation={spinner} variant="secondary" />
      </div>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Adoption Status </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option>Adopted</option>
              <option>Fostered</option>
              <option>Available</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>{" "}
          <Form.Group controlId="formFile" as={Col} md="4">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/jpg,image/png,image/jif,image/jpeg"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="mb-3 overflow-hidden">{clickedPet.uploadResult}</div>
          </Form.Group>
          <Form.Group as={Col} custom md="4" controlId="validationCustom0711">
            <Form.Label>Hypoallergenic</Form.Label>
            <Form.Control
              required
              as="select"
              value={elergy}
              onChange={(e) => setElergy(e.target.value)}
            >
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option>True</option>
              <option>False</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            md="6"
            className="mb-4"
            controlId="validationCustom071"
          >
            <Form.Label>Biography </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Type a text..."
              value={bio}
              className="pb-5"
              onChange={(e) => setBio(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            className="mb-4"
            controlId="validationCustom07"
          >
            <Form.Label>Dietary restrictions </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Dietary restrictions"
              value={diet}
              className="pb-5"
              onChange={(e) => setDiet(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-around">
        <Button type="submit">Update pet</Button>
        <Button type="button" onClick={()=>deletePet()}>Delete pet</Button>
        </div>
      </Form>
      {error ? <Alert className="text-center" variant="danger">{error}</Alert> : ""}
    </div>
  );
}
