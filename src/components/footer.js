import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => (
  <footer>
    <Container fluid>
      <div className="wrapper mx-auto">
        <Row>
          <Col xs={12}>
            <span class="small">Proudly serving: Austin, Cedar Park, Georgetown, Lakeway, Leander, Pflugerville & Round Rock</span>
          </Col>
        </Row>
      </div>
    </Container>
  </footer>
)

export default Footer