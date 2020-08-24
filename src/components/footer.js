import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => (
  <footer class="mt-auto py-4">
    <Container fluid>
      <div className="wrapper mx-auto">
        <Row>
          <Col xs={12}>
            <span class="small">254 Fixdoor</span><br/>
            <span class="small">City, State, Zip Code</span><br/>
            <span class="small">(512) 349-3667</span><br/>
          </Col>
        </Row>
      </div>
    </Container>
  </footer>
)

export default Footer