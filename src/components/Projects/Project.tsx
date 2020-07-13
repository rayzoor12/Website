import * as React from "react"
import "./Project.css"
import Fade from "react-reveal/Fade"

interface Props {
  project: {
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
}

const Project = (props: Props) => {
  const { project } = props
  return (
    <Fade bottom>
      <div className="Project">
        <div className="Project-info">
          <h3>{project.node.header}</h3>
          <h4>
            {project.node.from} - {project.node.to}
          </h4>
        </div>
        <div
          className="Project-details"
          dangerouslySetInnerHTML={{
            __html:
              project.node.childContentfulProjectContentTextNode
                .childMarkdownRemark.html,
          }}
        />
      </div>
    </Fade>
  )
}

export default Project
