import React from "react"
import { PropTypes } from "prop-types"
import classNames from "classnames"

import projectCardStyles from "./ProjectCard.module.scss"

import Button from "../../../UI/Button/Button"
import Image from "../../../UI/Image/Image"

const ProjectCard = ({ imgSrc, title, children, textLeft }) => {
  return (
    <div
      className={classNames(projectCardStyles.container, {
        [projectCardStyles.reverseRow]: textLeft,
      })}
    >
      <div className={projectCardStyles.image}>
        <Image filename={imgSrc} title={title} alt={title} />
      </div>
      <div className={projectCardStyles.content}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  )
}
ProjectCard.propType = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,

  textLeft: PropTypes.bool,
}

export default ProjectCard
