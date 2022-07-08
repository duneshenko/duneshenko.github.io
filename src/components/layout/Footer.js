import React from "react"

import * as styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          Contact agency
        </div>
        <div className={styles.itemLinks}>
          <a className={styles.itemLink} href="mailto:hello@reagent-talents.com">
            hello@reagent-talents.com
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          Contact me
        </div>
        <div className={styles.itemLinks}>
          <a className={styles.itemLink} href="mailto:roman.duneshenko@gmail.com">
            roman.duneshenko@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          Subscribe
        </div>
        <div className={styles.itemLinks}>
          <a className={styles.itemLink} href="https://www.instagram.com/duneshenko/">
            INST
          </a>
          <a className={styles.itemLink} href="https://www.facebook.com/roman.duneshenko/">
            FB
          </a>
          <a className={styles.itemLink} href="https://vimeo.com/duneshenko">
            VIMEO
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
