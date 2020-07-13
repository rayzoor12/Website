import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import "./Hero.css"

const Hero = () => {
  const { contentfulStartPageHeroTextNode } = useStaticQuery(graphql`
    query HeroQuery {
      contentfulStartPageHeroTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  return (
    <Fade ssrReveal>
      <section
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          className="Hero"
          dangerouslySetInnerHTML={{
            __html: contentfulStartPageHeroTextNode.childMarkdownRemark.html,
          }}
        />
      </section>
    </Fade>
  )
}

export default Hero
