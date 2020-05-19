import React from "react"

import JobCard from "./JobCard/JobCard"

import experienceSectionStyles from "./ExperienceSection.module.scss"
import Image from "./../../UI/Image/Image"

const widthForIcons = 100

const ExperienceSection = () => {
  return (
    <section className={`section ${experienceSectionStyles.container}`}>
      <div className={experienceSectionStyles.experience}>
        <h1>Experience</h1>
        <JobCard
          jobTitle="Instructor"
          company="Coding with Kids"
          duration="Dec 2019-Present"
          location="Denver, CO"
        >
          <ul>
            <li>
              Runs class for MineCraft server modification to teach children
              more advanced programming conecpts in java
            </li>
            <li>
              Teaches children grades K-8 basic programming concepts through
              Scratch Game Developemnt and Robotics (Ozobots)
            </li>

            <li>
              Preparing and presenting coursework and activites for students
              using CodeKingdoms for Minecraft server modifications, and Scratch
              for Game Development and Robotics
            </li>
            <li>
              Acts as liason between schools and parents for Coding with Kids
            </li>
          </ul>
        </JobCard>
        <JobCard
          jobTitle="Junior Front End Web Designer/Developer"
          company="NCH Software"
          duration="Dec 2017-Dec 2019"
          location="Denver, CO"
        >
          <ul>
            <li>
              Part of development team for 3 web facing applications, only front
              end person for each
            </li>
            <li>
              Revamped UI and app interface for PhotoPad Online, taking it from
              an unfinished and unresponsive UI to a fully responsive and
              functional online photo editor
            </li>
            <li>
              Responsible for UI/UX overhaul of Brisk Invoice to add mobile
              responsiveness to application
            </li>
            <li>
              Works closely with marketing team to help develop and implement
              A/B testing for product landing pages
            </li>
          </ul>
        </JobCard>
        <JobCard
          jobTitle="Web Designer"
          company="Fix8 Media"
          duration="Aug 2016-Dec 2017"
          location="Longmont, CO"
        >
          <ul>
            <li>
              Added customizations to SquareSpace templates when clients
              required more for their sites
            </li>
            <li>
              Worked in direct contact with clients to achieve their goals
              within their budget
            </li>
          </ul>
        </JobCard>
      </div>
      <div className={experienceSectionStyles.skills}>
        <h1>Skills</h1>

        <div className={experienceSectionStyles.skillsList}>
          <Image
            filename="js"
            alt="JavaScript Icon"
            title="JavaScript"
            maxWidth={widthForIcons}
          />
          <Image
            filename="react"
            alt="React Icon"
            title="React"
            maxWidth={widthForIcons}
          />
          <Image
            filename="gatsby"
            alt="Gatsby Icon"
            title="Gatsby"
            maxWidth={widthForIcons}
          />
          <Image
            filename="sass"
            alt="Sass Icon"
            title="Sass"
            maxWidth={widthForIcons}
          />
          <Image
            filename="html"
            alt="HTML/CSS Icon"
            title="HTML/CSS"
            maxWidth={widthForIcons}
          />

          <Image
            filename="firebase"
            alt="Firebase Icon"
            title="Firebase"
            maxWidth={widthForIcons}
          />

          <Image
            filename="semantic"
            alt="Semantic UI React Icon"
            title="Semantic UI React"
            maxWidth={widthForIcons}
          />
          <Image
            filename="bootstrap"
            alt="Bootstrap Icon"
            title="Bootstrap"
            maxWidth={widthForIcons}
          />
          <Image
            filename="github"
            alt="Github Icon"
            title="Github"
            maxWidth={widthForIcons}
          />
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
