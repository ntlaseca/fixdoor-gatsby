import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import search from "./search.svg"

const Header = () => (
  <header>
    <Container fluid className="navbar-dark bg-success">
      <div className="wrapper mx-auto">
        <Navbar expand="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#repairs">Repairs</Nav.Link>
              <Nav.Link href="#new-door">New Door</Nav.Link>
              <Nav.Link href="#new-opener">New Opener</Nav.Link>
              <NavDropdown title="Commercial" id="commercial-dropdown">
                <a className="dropdown-item" href="commercial/commercial-repairs/index.html">Commercial Repairs</a>
                <a className="dropdown-item" href="commercial/commercial-doors/index.html">Commercial Doors</a>
                <a className="dropdown-item" href="commercial/commercial-openers/index.html">Commercial Openers</a>
              </NavDropdown>
              <NavDropdown title="Parts" id="parts-dropdown">
                <a className="dropdown-item" href="parts/door-parts/index.html">Door Parts</a>
                <a className="dropdown-item" href="parts/opener-parts/index.html">Opener Parts</a>
              </NavDropdown>
              <Nav.Link href="#diy">DIY</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <FormControl type="text" placeholder="Search"/>
            <Button variant="light" type="submit">
              <img src={search} alt="search" />
            </Button>
          </Form>
        </Navbar>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
