import React, { useState } from "react"

import Logo from "./Logo"
import NavigationLinks from "./NavigationLinks"

import navigationStyles from "./Navbar.module.scss"
import Toggle from "./Toggle"
import Burger from "./Burger"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div className={navigationStyles.navContainer}>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => {
          setNavbarOpen(!navbarOpen)
        }}
      >
        {navbarOpen ? <Burger open /> : <Burger />}
      </Toggle>
      <NavigationLinks />
    </div>
  )
}

export default Navbar
