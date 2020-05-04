import React from "react"
import { PropTypes } from "prop-types"

import bannerStyles from "./Banner.module.scss"

const Banner = ({ children }) => {
  return (
    <div className={bannerStyles.container}>
      <div className={bannerStyles.content}>{children}</div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
}

export default Banner
