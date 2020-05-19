import React from "react"

import projectSectionStyles from "./ProjectsSection.module.scss"
import ProjectCard from "./ProjectCard/ProjectCard"

const ProjectsSection = () => {
  return (
    <section className={projectSectionStyles.container}>
      <div>
        <div className={projectSectionStyles.header}>
          <h1>Personal Projects</h1>
          <h3>
            React is the future of front end web development, so I've spent time
            teaching myself the fundamentals of React - the best way to do that
            is to build stuff!
          </h3>
        </div>
        <div className={projectSectionStyles.cards}>
          <ProjectCard />
          <ProjectCard textLeft />
          <ProjectCard />
        </div>
      </div>
      <div>
        <div className={projectSectionStyles.header}>
          <h1>Professional Projects</h1>
          <h3>
            My previous employer did not allow for use of any sort of third
            party libraries. The UI's were built completely with vanilla JS and
            CSS, we even supported all browsers down to IE 10
          </h3>
        </div>
        <div className={projectSectionStyles.cards}>
          <ProjectCard textLeft />
          <ProjectCard />
          <ProjectCard textLeft />
        </div>
      </div>
      <div>
        <div className={projectSectionStyles.header}>
          <h1>Web Design</h1>
          <h3>
            I got my start in web work building sites in Squarespace. Man
            clients had needs that went past the ability of Sqaurespace. With
            some SASS and jQuery I was able to provide end solutions for clients
            needs
          </h3>
        </div>
        <div className={projectSectionStyles.cards}>
          <ProjectCard />
          <ProjectCard textRight />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
