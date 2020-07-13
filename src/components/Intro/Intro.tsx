import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./Intro.css"

const Intro = () => {
  const { contentfulStartPageIntroTextNode } = useStaticQuery(graphql`
    query IntroQuery {
      contentfulStartPageIntroTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  return (
    <section>
      <div
        className="Intro"
        dangerouslySetInnerHTML={{
          __html: contentfulStartPageIntroTextNode.childMarkdownRemark.html,
        }}
      />
    </section>
  )
}

export default Intro
