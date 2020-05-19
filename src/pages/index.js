import React from "react"

import Layout from "./../components/Layout/Layout"
import Banner from "./../components/banner/Banner"

import AboutSection from "./../components/IndexPageComponents/AboutSection/AboutSection"
import ExperienceSection from "./../components/IndexPageComponents/ExpereinceSection/ExperienceSection"
import { Helmet } from "react-helmet"
import ProjectsSection from "./../components/IndexPageComponents/ProjectsSection/ProjectsSection"

export default () => (
  <Layout>
    <Helmet>
      <title>{process.env.GATSBY_TITLE}</title>
    </Helmet>
    <Banner>
      <h1>
        <strong>Devon Deason</strong>
      </h1>
      <h1>A react developer and coding instructor</h1>
    </Banner>
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
  </Layout>
)
