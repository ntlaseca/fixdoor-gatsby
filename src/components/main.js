import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => (
  <main>
    <Container fluid>
      <div className="wrapper mx-auto">
        <Row className="mt-5 mb-5">
          <Col xs={12}>
            <h1 className="text-center">What can we help you with today?</h1>
          </Col>
        </Row>
      </div>
    </Container>
  </main>
)

export default Footer