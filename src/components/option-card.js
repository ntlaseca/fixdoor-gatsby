import React from "react"
import { Link } from "gatsby"
import placeholder from "../images/garage.jpg"

import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const OptionCard = ({ link, alt, cardTitle }) => {
  return (
    <Col xs={5}>
      <Link to={link}>
        <Card className="img-fluid text-white">
          <Card.Img variant="top" src={placeholder} alt={alt} />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center align-content-center">
            <h3>{cardTitle}</h3>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  )
}

export default OptionCard