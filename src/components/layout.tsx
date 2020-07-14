import * as React from "react"
import Header from "./Header/Header"
import "./layout.css"
import Footer from "./Footer/Footer"

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
        <main style={{ marginBottom: "10vmax" }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
