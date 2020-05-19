import React from "react"
import classNames from "classnames"

import projectCardStyles from "./ProjectCard.module.scss"

import Button from "../../../UI/Button/Button"
import Image from "../../../UI/Image/Image"

const ProjectCard = ({ textLeft }) => {
  return (
    <div
      className={classNames(projectCardStyles.container, {
        [projectCardStyles.reverseRow]: textLeft,
      })}
    >
      <div className={projectCardStyles.image}>
        <Image filename="demo" maxWidth={500} />
      </div>
      <div className={projectCardStyles.content}>
        <h3>Project Name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          consectetur ipsam molestias libero inventore! Vero corporis,
          laudantium, distinctio natus, sequi eaque qui maxime at adipisci
          cupiditate obcaecati explicabo consequatur alias?
        </p>
        <Button type="primary" text="View App" />
        <Button
          type="secondary"
          text="Github Repo"
          iconSrc="github"
          iconWidth={50}
        />
      </div>
    </div>
  )
}

export default ProjectCard
