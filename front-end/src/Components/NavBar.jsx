import React, { Component } from "react";
import {
  Navbar,
  Nav,
  
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarGeneral({ dataOfUser, setDataOfUser, setAuth })
{
    function disconnect(){
        setDataOfUser("")
        setAuth(false)
    }
  return (
    <div>
      
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>{`${dataOfUser.firstname} ${dataOfUser.lastName}`}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/login" as={Link} >
                  Home
                </Nav.Link>
                <Nav.Link to="/pets" as={Link} >
                Pets
                </Nav.Link>
                <Nav.Link to="/settings" as={Link} >
                Settings
                </Nav.Link>
                
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Button
                variant="secondary mx-2"
                onClick={()=>disconnect()}
              >
                Disconnect
              </Button>{" "}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      
    </div>
  );
}
