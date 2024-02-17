import "./Header.css";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar   sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src="./images/reslogo.jpg"  alt="" /> */}
            <h1 style={{color:'#ab3550;'  , fontWeight:'bold' ,textTransform:'uppercase'}}>Foodera</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Explore Food</Nav.Link>
              <Nav.Link href="#link">Review</Nav.Link>
              <Nav.Link href="#link">Faq</Nav.Link>
              <Nav.Link className="num">13579810</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
