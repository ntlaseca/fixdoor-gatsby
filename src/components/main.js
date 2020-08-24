import React from "react"
import PropTypes from "prop-types"

import SimpleBar from "simplebar-react"
import 'simplebar/dist/simplebar.min.css'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const Main = ({ pageTitle, children }) => {
  return (
    <main>
      <Container fluid>
        <div className="wrapper mx-auto">

          <Row className=" mt-5 mb-5">
            <Col xs={6}>
              <Button variant="outline-success" size="lg" block>(512) 349-3667</Button>
            </Col>
            <Col xs={6}>
            <Button variant="outline-success" size="lg" block>Schedule Now</Button>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={12}>
              <h1 className="text-center">{pageTitle}</h1>
            </Col>
          </Row>

          <SimpleBar className="h-scroll pt-5 pb-5 mb-5">
            <Row className="flex-nowrap text-center">
              {children}
            </Row>
          </SimpleBar>

        </div>
      </Container>
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main