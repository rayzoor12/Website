import { Link } from "gatsby"
import * as React from "react"
import { GithubFilled, LinkedinFilled } from "@ant-design/icons"
import Fade from "react-reveal/Fade"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
  return (
    <header
      style={{
        background: `#eaf6f3`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `2.4vw 4vw`,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <Fade ssrReveal>
          <h1 style={{ margin: 0, fontWeight: "normal" }}>
            <Link
              to="/"
              style={{
                color: `#0f3310`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </Fade>
        <div
          style={{
            display: "flex",
            width: "60px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LinkedinFilled
            style={{
              marginBottom: "0px",
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/emil-fjellstr%C3%B6m-ab2a09134/",
                "_blank"
              )
            }
          />
          <GithubFilled
            style={{
              marginBottom: "0px",
            }}
            onClick={() =>
              window.open("https://github.com/emilfjellstrom", "_blank")
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
