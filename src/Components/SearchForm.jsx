import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function SearchForm({
  adv,
  petData,
  handleChange,
  handleSearch,
  setAdv,
}) {
  const { type, name, weight, height, status } = petData;

  return (
    <Form className="mb-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter text"
          name="type"
          value={type}
          onChange={handleChange}
        />
      </Form.Group>
      {adv && (
        <>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formBasicStatus">
              <Form.Label>Adoption Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adoption Status"
                name="status"
                value={status}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Height"
                name="height"
                value={height}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formBasicWeight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight"
                name="weight"
                value={weight}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
        </>
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
          checked={adv}
          onChange={(e) => setAdv(e.target.checked)}
        />
      </Form.Group>
    </Form>
  );
}
