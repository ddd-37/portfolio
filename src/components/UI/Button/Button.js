import React from "react"
import { PropTypes } from "prop-types"
import classNames from "classNames"

import buttonStyles from "./Button.module.scss"

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={classNames(buttonStyles.button, buttonStyles[type])}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Button
