import React from "react"

import JobCard from "./JobCard/JobCard"

import experienceSectionStyles from "./ExperienceSection.module.scss"

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
              Teaches a range of programming topics for kids from k-8th grade
            </li>
            <li>
              Responsible for using curriculum resources to provide a quality
              expereince fro all students
            </li>
            <li>
              Acts as liason between schools and parents for Coding with Kids
            </li>
          </ul>
        </JobCard>
        <JobCard
          jobTitle="Junior front end web designer/developer"
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
              Translated UI from Photopad for desktop to online and mobile
              friendly version
            </li>
            <li>
              Responsible for UI/UX overhaul of Brisk Invoice to add mobile
              responsiveness to application
            </li>
            <li>
              Acts as liason between schools and parents for Coding with Kids
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
        <h1>SKILLS</h1>
        <p>javascript</p>
        <p>React</p>
        <p>CSS</p>
        <p>HTML</p>
        <p>GitHub</p>
        <p>SVN</p>
        <p>Firebase</p>
      </div>
    </section>
  )
}

export default ExperienceSection
