import React from "react"

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import * as styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Header/>
        <Content>{children}</Content>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
