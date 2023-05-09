import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function FormUserData({ userData, setUserData, type }) {
  const {
    email,
    password,
    firstname,
    lastName,
    confirmPasswad,
    phone,
    bio,
  } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Form>
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {type !== "login" && (
          <Form.Group as={Col} controlId="formGridPassword1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="confirmPasswad"
              value={confirmPasswad}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
        )}
      </Row>
      {type !== "login" && (
        <>
          <Form.Group controlId="formGridName" className="mb-3">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="firstname"
              value={firstname}
              placeholder="Firstname"
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress22" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="phone"
              value={phone}
              type="number"
              placeholder="Phone Number"
              required
            />
          </Form.Group>
          {type === "update" && (
            <Form.Group controlId="formGridAddress222" className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="bio"
                value={bio}
                type="text"
                placeholder="Bio"
              />
            </Form.Group>
          )}
        </>
      )}
    </Form>
  );
}

export default FormUserData;
