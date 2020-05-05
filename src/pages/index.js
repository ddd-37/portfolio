import React from "react"

import Layout from "./../components/layout/Layout"
import Banner from "./../components/banner/Banner"

import indexPageStyles from "./index.module.scss"
import BioSection from "../components/indexPageComponents/BioSection/Biosection"

export default () => (
  <Layout>
    <Banner>
      <h1>
        Hello there! I'm <strong>Devon Deason</strong>.
      </h1>
      <h1>A react developer and coding instructor</h1>
    </Banner>
    <BioSection />
  </Layout>
)
