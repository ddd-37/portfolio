import React from "react"
import { Link } from "gatsby"

import navigationLinksStyles from "./NavigationLinks.module.scss"

const NavigationLinks = () => {
  return (
    <ul className={navigationLinksStyles.navList}>
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
  )
}

export default NavigationLinks
