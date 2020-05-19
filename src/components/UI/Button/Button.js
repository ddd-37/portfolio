import React from "react"
import { PropTypes } from "prop-types"
import classNames from "classnames"

import buttonStyles from "./Button.module.scss"

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={classNames(buttonStyles.button, buttonStyles[type])}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Button
