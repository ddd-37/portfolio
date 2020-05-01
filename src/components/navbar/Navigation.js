import React from "react"
import { Link } from "gatsby"

import navigationStyles from "./Navigation.module.scss"
import Logo from "./Logo"

const Navigation = () => {
  return (
    <div>
      <Logo />
      <ul className={navigationStyles.navList}>
        <li> </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
