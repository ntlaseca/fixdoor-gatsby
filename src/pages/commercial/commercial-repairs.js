import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Main from "../../components/main"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

const Repairs = () => (
  <Layout>
    <SEO title="Commercial Repairs" />
    <Main pageTitle="Rest assured, we can be there in about an hour so that you don't have to pay overtime.">
      <Row className="mt-5 mb-5">
        <Col xs={12}>
          <p>With our technology, you don't even need to call, enter your information below, and you will have an immediate Estimated Time of Arrival (ETA). Its like ordering a pizza, only you get to see your tech as he makes his way to save your day!</p>
        </Col>
      </Row>

      <Row className="mt-5 mb-5">
        <Col xs={12}>
          <Form>
            <Form.Group controlId="formCompanyName">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formContactName">
              <Form.Label>Contact name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="123 County Rd, Waco, TX 76633" />
            </Form.Group>
            
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="(XXX) XXX-XXXX" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Main>
  </Layout>
)

export default Repairs
