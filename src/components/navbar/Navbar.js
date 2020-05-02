import React, { useState } from "react"

import Logo from "./Logo"
import NavigationLinks from "./NavigationLinks"

import navbarStyles from "./Navbar.module.scss"
import Burger from "./Burger"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const menuOpen = navbarOpen ? navbarStyles.navMenuOpen : ""

  return (
    <div className={navbarStyles.container}>
      <Burger
        open={navbarOpen}
        clicked={() => {
          setNavbarOpen(!navbarOpen)
        }}
      />

      <div
        className={`${navbarStyles.navMenu}
          ${menuOpen}`}
      >
        <Logo />
        <NavigationLinks />
      </div>
    </div>
  )
}

export default Navbar
