import * as React from "react"
import Header from "./Header/Header"
import "./layout.css"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header siteTitle="Emil Fjellström" />
      <div
        style={{
          margin: `0 auto`,
          padding: `2.4vw 4vw`,
          position: `absolute`,
          top: `110px`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
