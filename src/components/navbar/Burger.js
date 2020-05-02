import React from "react"

import hamburgerStyles from "./Burger.module.scss"

const Burger = ({ open, clicked }) => {
  return (
    <buttton
      className={open ? hamburgerStyles.burgerIsActive : hamburgerStyles.burger}
      onClick={clicked}
      role="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <polygon
          points="0,0 100,0 0,100"
          className={hamburgerStyles.triangle}
        ></polygon>
      </svg>
      <div className={hamburgerStyles.inner}></div>
    </buttton>
  )
}

export default Burger
