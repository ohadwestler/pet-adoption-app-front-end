import React, { useState } from 'react';
import { Form, Col, InputGroup, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export default function Settings({dataOfUser, setDataOfUser}){
    
const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState(dataOfUser.email)
  const [password, setPassward] = useState("")
  const [firstname, setFirstname] = useState(dataOfUser.firstname)
  const [lastName, setlastName] = useState(dataOfUser.lastName)
  const [phone, setPhone] = useState(dataOfUser.phone)
  const [confirmPasswad, setConfirmPasswad] = useState("")
  const [error, setError] = useState(false)
  const [bio, setBio] = useState("")
  
async function handleSubmit (event) {

    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    
    try{
      const response = await axios.put(`http://localhost:3001/changes`, { email, password, firstname, lastName,  phone, confirmPasswad, bio });
      setDataOfUser({...response.data})
      console.log(response);
      setError("")
      alert(dataOfUser.message|| "updated!")
  
        }
  
        catch (err) {
          setError(err.response.data.message);
          if (err.response.data[0]) 
          {
            setError(
              `${err.response.data[0].instancePath.replace("/", "")} ${
                err.response.data[0].message
              }`
            );
          } else {
            setError(err.response.data.message);
          }
        }
      
  };


  
    return(
        <>
         <Form className='m-5' noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue={dataOfUser.firstname}
              onChange={(e)=>setFirstname(e.target.value)} 
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
              onChange={(e)=>setlastName(e.target.value)}
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
                onChange={(e)=>setEmail(e.target.value)}
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
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone" defaultValue={dataOfUser.phone} onChange={(e)=>setPhone(e.target.value)}
                required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassward(e.target.value)}
                 required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom045">
            <Form.Label>Confirm passwad</Form.Label>
            <Form.Control type="password" placeholder="Confirm password"  onChange={(e)=>setConfirmPasswad(e.target.value)}
                 required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Form.Group className='mb-4'  md="12" >
            <Form.Label>biography</Form.Label>
            <Form.Control defaultValue={dataOfUser.bio} onChange={(e)=>setBio(e.target.value)} className='pb-5' type="text" placeholder="text..."/>
          </Form.Group>
       
        <Button type="submit">Save changes</Button>
      </Form>
{error?
          <Alert className='text-center' variant="danger">{error}</Alert>:""}
        </>
    )
}

    
  
 