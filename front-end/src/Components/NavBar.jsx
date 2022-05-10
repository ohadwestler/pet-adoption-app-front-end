import axios from "axios";
import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarGeneral({ dataOfUser, setDataOfUser, setAuth })
{
    function disconnect(){
        axios.get("http://localhost:3001/disconnect")
        setDataOfUser("")
        setAuth(false)
    }
  return (
    <div className="mb-5">
      
        <Navbar bg="light" expand="lg">
          <Container fluid>
            {dataOfUser?<>
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
                <Nav.Link to="/search" as={Link} >
                Search
                </Nav.Link>
                <Nav.Link to="/mypets" as={Link} >
                My pets
                </Nav.Link>
               
                
                {(dataOfUser.role === "admin") ?
                <>
                <Nav.Link to="/users" as={Link} >
                  Users
                </Nav.Link>
                <Nav.Link to="/pets" as={Link} >
                All pets
                </Nav.Link>
                <Nav.Link to="/addpet" as={Link} >
                  Add Pet
                </Nav.Link>
                </>
                :""}
                <Nav.Link to="/settings" as={Link} >
                Update profile
                </Nav.Link>
              </Nav>
              
              <Button
                variant="secondary mx-1 my-2"
                onClick={()=>disconnect()}
              >
                Logout
              </Button>{" "}
            </Navbar.Collapse>
            </>:<>
            
          
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/" as={Link} >
                  Home
                </Nav.Link>
                
               
                <Nav.Link to="/search" as={Link} >
                Search
                </Nav.Link>
              </Nav>
              
            </Navbar.Collapse>


            </>}
          </Container>
        </Navbar>
      
      
    </div>
  );
}
