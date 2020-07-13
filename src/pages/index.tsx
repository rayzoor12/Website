import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Intro from "../components/Intro/Intro"
import ProjectContainer from "../components/ProjectContainer/ProjectContainer"
import config from "react-reveal/globals"

config({ ssrFadeout: true })

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <ProjectContainer />
  </Layout>
)

export default IndexPage
