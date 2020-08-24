import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
