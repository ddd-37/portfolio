import React from "react"

import Layout from "./../components/layout/Layout"
import Banner from "./../components/banner/Banner"

import BioSection from "../components/indexPageComponents/BioSection/Biosection"
import ExperienceSection from "../components/indexPageComponents/ExpereinceSection/ExperienceSection"

export default () => (
  <Layout>
    <Banner>
      <h1>
        <strong>Devon Deason</strong>
      </h1>
      <h1>A react developer and coding instructor</h1>
    </Banner>
    <BioSection />
    <ExperienceSection />
  </Layout>
)
