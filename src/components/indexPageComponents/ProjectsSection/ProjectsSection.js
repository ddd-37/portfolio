import React from "react"

import projectSectionStyles from "./ProjectsSection.module.scss"
import ProjectCard from "./ProjectCard/ProjectCard"

const ProjectsSection = () => {
  return (
    <section className={projectSectionStyles.container}>
      <h1>Projects</h1>
      <div className={projectSectionStyles.section}>
        <h2>Personal</h2>
        <p>
          React is the future of front end web development, so I've spent time
          teaching myself the fundamentals of React. The best way to do that is
          to build stuff! Please take a look at a few porjects I'm proupd to
          show
        </p>
        <div className={projectSectionStyles.cards}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
