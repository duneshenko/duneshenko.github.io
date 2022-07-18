import React from "react"

import Header from "./Header"
import Container from "./Container"
import Footer, { FooterHighlighter } from "./Footer"
import * as styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <FooterHighlighter>
          <Header/>
          <Container>{children}</Container>
          <Footer/>
        </FooterHighlighter>
      </div>
    </div>
  )
}

export default Layout
