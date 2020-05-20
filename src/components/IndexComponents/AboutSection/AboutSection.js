import React from "react"
import { Link } from "gatsby"

import Button from "../../UI/Button/Button"

import Avatar from "../Avatar/Avatar"

const AboutSection = () => {
  return (
    <section className="section">
      <summary className="limit-width-30">
        <Avatar />
        <h2 className="center">About</h2>
        <p>
          Welcome! I'm a front end developer and coding instructor from Denver,
          Colorado. I am passionate about learning new things, collaboration,
          and sharing my knowledge with others
        </p>
        <p>
          With over three years of web development and design experience, I
          understand the importance of teamwork and staying up to date with the
          latest technologies
        </p>
        <Link to="/about">
          <Button type="primary" text="About" />
        </Link>
      </summary>
    </section>
  )
}

export default AboutSection
