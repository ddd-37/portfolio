import React from "react"
import { PropTypes } from "prop-types"

import bannerStyles from "./Banner.module.scss"

const Banner = ({ children }) => {
  return <div className={bannerStyles.container}>{children}</div>
}

Banner.propTypes = {
  children: PropTypes.any,
}

export default Banner
