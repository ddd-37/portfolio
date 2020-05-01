import React, { useState } from "react"

import Logo from "./Logo"
import NavigationLinks from "./NavigationLinks"

import navigationStyles from "./Navbar.module.scss"
import Burger from "./Burger"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className={navigationStyles.navContainer}>
      <Burger
        open={navbarOpen}
        clicked={() => {
          setNavbarOpen(!navbarOpen)
        }}
      />
      <Logo />

      <NavigationLinks />
    </div>
  )
}

export default Navbar
