import React from "react"

import * as styles from "./Container.module.css"

const Container = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default Container
