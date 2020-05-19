import React from "react"

import projectSectionStyles from "./ProjectsSection.module.scss"
import ProjectCard from "./ProjectCard/ProjectCard"
import { Link } from "gatsby"
import Button from "../../UI/Button/Button"
import LinkOffSite from "./../../UI/LinkOffSite/LinkOffSite"

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
          <ProjectCard imgSrc="corona" title="Corona Tracker" btn1>
            <p>
              This is an ongoing exercise in reverse engineering the Johns
              Hopkins Corona Tracker. Built with Gatsby, Leaflet, and Mapbox.
              I've added clickable layers to the USA panel to allow for more
              detailed data to show by county. This app has been a good
              exericise with using new React features like hooks and useEffect.
              It was also my first foray into hosting an app on Netlify
            </p>
            <LinkOffSite url="https://mycoronatracker-devondeason.netlify.app/">
              <Button text="View App" type="primary" />
            </LinkOffSite>
            <LinkOffSite url="https://github.com/ddd-37/coronatracker">
              <Button text="View Repo" type="secondary" />
            </LinkOffSite>
          </ProjectCard>
          <ProjectCard
            imgSrc="demo"
            title="Weather Wizard"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
            textLeft
          />
          <ProjectCard
            imgSrc="demo"
            title="Hacker News Clone"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
          />
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
          <ProjectCard
            imgSrc="demo"
            title="PhotoPad Online"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
            textLeft
          />
          <ProjectCard
            imgSrc="demo"
            title="Brisk Invoice"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
          />
          <ProjectCard
            imgSrc="demo"
            title="Brisk Support"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
            textLeft
          />
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
          <ProjectCard
            imgSrc="demo"
            title="Proud to be Prepped"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
          />
          <ProjectCard
            imgSrc="demo"
            title="Cyber Technologies"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
            textLeft
          />
          <ProjectCard
            imgSrc="demo"
            title="Wedgie Media"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad consectetur ipsam molestias libero inventore! Vero corporis, laudantium, distinctio natus, sequi eaque qui maxime at adipisci cupiditate obcaecati explicabo consequatur alias?"
            btn1
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
