import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "../images/logo1.png"
const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#"><img src="" alt='noDukaan'/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#hero-section">Home</Nav.Link>
          <Nav.Link href="#section-products">Products</Nav.Link>
          <Nav.Link href="#signup-form">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
