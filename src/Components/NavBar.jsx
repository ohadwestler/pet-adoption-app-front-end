import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dissconnectUser } from "../Redux/user/actions/useActions";

export default function NavBarGeneral() {
  const { userDetails } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDisconnect = () => {
    dispatch(dissconnectUser());
  };

  const { role, firstname, lastName } = userDetails || {};

  const commonLinks = [
    { to: userDetails ? "/login" : "/", text: "Home" },
    { to: "/search", text: "Search" },
  ];

  const userLinks = [
    { to: "/mypets", text: "My pets" },
    { to: "/settings", text: "Update profile" },
  ];

  const adminLinks = [
    { to: "/users", text: "Users" },
    { to: "/pets", text: "All pets" },
    { to: "/addpet", text: "Add Pet" },
  ];

  return (
    <div className="mb-5">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {userDetails ? (
            <>
              <Navbar.Brand>{`${firstname} ${lastName}`}</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {commonLinks.map(({ to, text }) => (
                    <Nav.Link key={to} to={to} as={Link}>
                      {text}
                    </Nav.Link>
                  ))}
                  {userLinks.map(({ to, text }) => (
                    <Nav.Link key={to} to={to} as={Link}>
                      {text}
                    </Nav.Link>
                  ))}
                  {role === "admin" &&
                    adminLinks.map(({ to, text }) => (
                      <Nav.Link key={to} to={to} as={Link}>
                        {text}
                      </Nav.Link>
                    ))}
                </Nav>
                <Button
                  variant="secondary mx-1 my-2"
                  onClick={handleDisconnect}
                >
                  Logout
                </Button>{" "}
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {commonLinks.map(({ to, text }) => (
                    <Nav.Link key={to} to={to} as={Link}>
                      {text}
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
