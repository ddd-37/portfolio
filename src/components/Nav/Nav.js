import React from "react"
import { Link } from "gatsby"

import navigationStyles from "./Nav.module.scss"

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
