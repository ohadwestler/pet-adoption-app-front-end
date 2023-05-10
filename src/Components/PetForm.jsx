import React from "react";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import { deletePet } from "../Redux/pets/actions/useActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function PetForm({
  petData,
  pageType,
  setPetData,
  handleSubmit,
  validated,
  error,
}) {
  const {
    name,
    type,
    color,
    diet,
    weight,
    height,
    status = "",
    bread,
    bio,
    image,
    elergy = "",
  } = petData || "";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (petsId) => {
    await dispatch(deletePet(petsId));
    navigate("/pets");
  }

  return (
    <>
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
              onChange={(e) => setPetData({ ...petData, name: e.target.value })}
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
              onChange={(e) => setPetData({ ...petData, type: e.target.value })}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom045">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) =>
                setPetData({ ...petData, color: e.target.value })
              }
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
              onChange={(e) =>
                setPetData({ ...petData, bread: e.target.value })
              }
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Weight </Form.Label>
            <Form.Control
              type="number"
              placeholder="weight"
              value={weight}
              onChange={(e) =>
                setPetData({ ...petData, weight: e.target.value })
              }
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
              required
              onChange={(e) =>
                setPetData({ ...petData, height: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom003">
            <Form.Label>Adoption Status </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(e) =>
                setPetData({ ...petData, status: e.target.value })
              }
              required
            >
              <option> -- select an option -- </option>
              <option>Adopted</option>
              <option>Fostered</option>
              <option>Available</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formFile" as={Col} md="4">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/jpg,image/png,image/jif,image/jpeg"
              required
              onChange={(e) =>
                setPetData({ ...petData, image: e.target.files[0] })
              }
            />
            {image && typeof image === "string" ? (
              <div className="overflow-text">
                <a href={image} target="_blank" rel="noreferrer">
                  {image}
                </a>
              </div>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group as={Col} custom = 'true' md="4" controlId="validationCustom0711">
            <Form.Label>Hypoallergenic</Form.Label>
            <Form.Control
              required
              as="select"
              value={elergy}
              onChange={(e) =>
                setPetData({ ...petData, elergy: e.target.value })
              }
            >
              <option> -- select an option -- </option>
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
            <Form.Label>Biography (optional)</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Type a text..."
              value={bio}
              className="pb-5"
              onChange={(e) => setPetData({ ...petData, bio: e.target.value })}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            className="mb-4"
            controlId="validationCustom07"
          >
            <Form.Label>dietary restrictions </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="dietaryary restrictions"
              value={diet}
              className="pb-5"
              onChange={(e) => setPetData({ ...petData, diet: e.target.value })}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">
          {pageType === "update" ? "Update" : "Add pet"}
        </Button>
        {pageType === "update" ? (
        <Button className="mx-2" onClick={() => handleDelete(petData.petsId)}>
          Delete Pet
        </Button>
      ) : (
        ""
      )}
      </Form>
      {error ? (
        <Alert className="text-center" variant="danger">
          Please fill all the fields correctly.
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default PetForm;
