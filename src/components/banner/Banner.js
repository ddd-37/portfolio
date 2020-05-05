import React from "react"
import { PropTypes } from "prop-types"

import bannerStyles from "./Banner.module.scss"

const Banner = ({ children, style }) => {
  return (
    <div className={bannerStyles.container} style={style}>
      <div className={bannerStyles.content}>{children}</div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
}

export default Banner
