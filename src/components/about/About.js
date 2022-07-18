import React from "react"

import Bio from "./Bio"
import Awards from "./Awards"
import * as styles from "./About.module.css"

const About = () => {
  return (
    <main className={styles.about}>
      <Bio />
      <Awards />
    </main>
  )
}

export default About
