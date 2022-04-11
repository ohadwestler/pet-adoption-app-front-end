import React, { useState } from "react";
import { Row, Button, Col, Modal, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login(props) {
  const {setDataOfUser, setAuth} = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("")
  const [password, setPassward] = useState("")
  const [error, setError] = useState(false)

    
  
  let navigete = useNavigate()
  async function loginSubmit(){

    try{
    const response = await axios.post("/auth", { email, password });
  
    setDataOfUser({...response.data[0]})
    setEmail("")
    setPassward("")
    setAuth(true)
    handleClose()
    navigete("/login")
  
      }

    catch(err){
      setError(err.response.data);
     
    }
  }




  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} value = {email} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassward(e.target.value)} value = {password} type="password" placeholder="Password" />
              </Form.Group>
            </Row>
          </Form>
          {error?
          <Alert variant="danger">{error}</Alert>:""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>loginSubmit()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
}
