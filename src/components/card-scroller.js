import React from "react"
import PropTypes from "prop-types"

import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"

import Row from "react-bootstrap/Row"

const CardScroller = ({ children }) => {
  return (
    <SimpleBar className="h-scroll pt-5 pb-5 mb-5">
      <Row className="flex-nowrap text-center">
        {children}
      </Row>
    </SimpleBar>
  )
}

CardScroller.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardScroller