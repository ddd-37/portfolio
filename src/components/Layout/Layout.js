import React from "react"
import { PropTypes } from "prop-types"

import "normalize.css"
import layoutStyles from "./Layout.module.scss"
import Navigation from "../navbar/navigation"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Navigation />
      <div className={layoutStyles.content}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
