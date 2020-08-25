import { Link } from "gatsby"
import React from "react"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import search from "./search.svg"

const Header = ({ props }) => {
  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: "nav-link active" }
      : { className: "nav-link" }
  }

  const isDropdownActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: "dropdown-item active"}
      : { className: "dropdown-item"}
  }

  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: "active" }
      : { className: "" }
  }

  return (
    <header>
      <Container fluid className="navbar-dark bg-success">
        <div className="wrapper mx-auto">
          <Navbar expand="xl">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" getProps={isActive} {...props}>Home</Link>
                <Link to="/repairs/" getProps={isActive} {...props}>Repairs</Link>
                <Link to="/new-door/" getProps={isActive} {...props}>New Door</Link>
                <Link to="/new-opener/" getProps={isActive} {...props}>New Opener</Link>
                <NavDropdown title="Commercial" id="commercial-dropdown" getProps={isPartiallyActive} {...props}>
                  <Link to="/commercial/commercial-repairs/" getProps={isDropdownActive} {...props}>Commercial Repairs</Link>
                  <Link to="/commercial/commercial-doors/" getProps={isDropdownActive} {...props}>Commercial Doors</Link>
                  <Link to="/commercial/commercial-openers/" getProps={isDropdownActive} {...props}>Commercial Openers</Link>
                </NavDropdown>
                <NavDropdown title="Parts" id="parts-dropdown" getProps={isPartiallyActive} {...props}>
                  <Link to="/parts/door-parts/" getProps={isDropdownActive} {...props}>Door Parts</Link>
                  <Link to="/parts/opener-parts/" getProps={isDropdownActive} {...props}>Opener Parts</Link>
                </NavDropdown>
                <Link to="/diy/" getProps={isActive} {...props}>DIY</Link>
                <Link to="/about-us/" getProps={isActive} {...props}>About Us</Link>
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
}

export default Header
