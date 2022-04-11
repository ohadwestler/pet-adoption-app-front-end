import React, { Component, useState } from 'react';
import { FormGroup, Form, Col, InputGroup, Row, Button } from 'react-bootstrap';
import { TextareaHTMLAttributes } from 'react';


export default function Settings({dataOfUser}){
    
const [validated, setValidated] = useState(false);
  
const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return(
        <>
         <Form className='m-5' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue={dataOfUser.firstname}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue={dataOfUser.lastName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                defaultValue={dataOfUser.email}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone" defaultValue={dataOfUser.phone} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" defaultValue={dataOfUser.password} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Form.Group className='mb-4'  md="12" >
            <Form.Label>Biograpy</Form.Label>
            <Form.Control className='pb-5' type="text" placeholder="text..."/>
          </Form.Group>
       
        <Button type="submit">Save changes</Button>
      </Form>
        </>
    )
}

    
  
 