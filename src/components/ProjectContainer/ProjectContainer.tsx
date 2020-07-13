import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../Projects/Project"

interface ProjectType {
  node: {
    header: string
    from: Date
    to: Date
    childContentfulProjectContentTextNode: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const ProjectContainer = () => {
  const { allContentfulProject } = useStaticQuery(graphql`
    query ProjectQuery {
      allContentfulProject {
        edges {
          node {
            header
            from(formatString: "YYYY")
            to(formatString: "YYYY")
            childContentfulProjectContentTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      {allContentfulProject.edges.map((project: ProjectType, index: number) => (
        <Project key={index} project={project} />
      ))}
    </section>
  )
}

export default ProjectContainer
