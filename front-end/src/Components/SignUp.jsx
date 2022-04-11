import React, {useState } from "react";
import { Row, Button, Col, Modal, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function SignUp({setDataOfUser, setAuth}) {
  let navigete = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("")
  const [password, setPassward] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastName, setlastName] = useState("")
  const [confirmPasswad, setConfirmPasswad] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState(false)

  async function signUpSubmit (){

    const axios = require('axios');
        try{
        const res = await axios.post('http://localhost:3001/api/adduser', 
        {email,
        firstname,
        lastName,
        password,
        phone,
        confirmPasswad,
        })
        
        setDataOfUser({...res.data})
        setAuth(true)
      handleClose()
      navigete('/login')
    setConfirmPasswad("")
    setEmail("")
    setFirstname("")
    setPassward("")
    setPhone("")
    setlastName("")
   
  }
  catch(err){
    setError(err.response.data.message)
  }
  }







  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} value = {email} type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassward(e.target.value)} value = {password} type="password" placeholder="Password" required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword1">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={(e)=>setConfirmPasswad(e.target.value)} value = {confirmPasswad} type="password" placeholder="Password" required/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridName" required>
              <Form.Label>Firstname</Form.Label>
              <Form.Control onChange={(e)=>setFirstname(e.target.value)} value = {firstname} placeholder="Firstname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={(e)=>setlastName(e.target.value)} value = {lastName} placeholder="Last Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress22">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control onChange={(e)=>setPhone(e.target.value)} value = {phone} type="number" placeholder="Phone Number" required/>
            </Form.Group>
          </Form>
          {error?
          <Alert variant="danger">{error}</Alert>:""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>signUpSubmit()}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
