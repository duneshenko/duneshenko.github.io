import React from "react"

import Header from "./Header"
import Content from "./Content"
import Footer, { FooterHighlighter } from "./Footer"
import * as styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <FooterHighlighter>
          <Header/>
          <Content>{children}</Content>
          <Footer/>
        </FooterHighlighter>
      </div>
    </div>
  )
}

export default Layout
