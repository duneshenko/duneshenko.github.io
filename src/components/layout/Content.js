import React from "react"

import Container from "./Container"
import * as styles from "./Content.module.css"

const Content = ({ children }) => {
  return (
    <Container>
      <main className={styles.content}>
        {children}
      </main>
    </Container>
  )
}

export default Content
