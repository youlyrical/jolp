import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Heading(){
    return(
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">USW Community</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

                <Link to="/" style={{color:"white", textDecoreation:"none", marginRight:"10px",}}>home</Link>
                <Link to="/upload" style={{color:"white", textDecoreation:"none", marginRight:"10px",}}>upload</Link>
            <   Link to="/" style={{color:"white", textDecoreation:"none", marginRight:"10px",}}>list</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;