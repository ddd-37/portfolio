import React from "react"
import { Link } from "gatsby"

import Button from "./../../UI/Button/Button"

import biosectionStyles from "./BioSection.module.scss"
import Avatar from "../Avatar/Avatar"

const BioSection = () => {
  return (
    <section className={biosectionStyles.section}>
      <summary className={biosectionStyles.limitWidth30}>
        <Avatar />
        <h2 className={biosectionStyles.center}>About</h2>
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
          <Button type="primary" style="primary" text="Learn more" />
        </Link>
      </summary>
    </section>
  )
}

export default BioSection
