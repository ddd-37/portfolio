import React from "react"

import hamburgerStyles from "./Burger.module.scss"

const Burger = ({ open, clicked }) => {
  return (
    <button
      className={open ? hamburgerStyles.burgerIsActive : hamburgerStyles.burger}
      onClick={clicked}
      aria-label="Open nav button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <polygon
          points="0,0 100,0 0,100"
          className={hamburgerStyles.triangle}
        ></polygon>
      </svg>
      <div className={hamburgerStyles.inner}></div>
    </button>
  )
}

export default Burger
