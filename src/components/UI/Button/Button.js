import React from "react"
import { PropTypes } from "prop-types"
import classNames from "classNames"

import buttonStyles from "./Button.module.scss"

const Button = ({ text, style, onClick }) => {
  return (
    <button
      className={classNames(buttonStyles.button, buttonStyles[style])}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.oneOf(["primary"]),
}

export default Button
