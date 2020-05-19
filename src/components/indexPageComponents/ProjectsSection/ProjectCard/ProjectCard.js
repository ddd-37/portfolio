import React from "react"

import projetCardStyles from "./ProjectCard.module.scss"
import Button from "../../../UI/Button/Button"

const ProjectCard = () => {
  return (
    <div>
      <h3>Project Name</h3>
      <img src="https://via.placeholder.com/150" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur
        ipsam molestias libero inventore! Vero corporis, laudantium, distinctio
        natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo
        consequatur alias?
      </p>
      <Button type="primary" text="View App" />
      <Button
        type="secondary"
        text="Github Repo"
        iconSrc="github"
        iconWidth={50}
      />
    </div>
  )
}

export default ProjectCard
