import React, { useCallback } from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/logo.svg"
import * as styles from "./Header.module.css"

const Header = () => {
  const showContacts = useCallback(() => {
    document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
  }, [])

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.link} activeClassName={styles.active}>
          Work
        </Link>
        <Link to="/about/" className={styles.link} activeClassName={styles.active}>
          About
        </Link>
        <div className={styles.spacer}></div>
        <a className={styles.link} onClick={showContacts}>
          Contacts
        </a>
      </nav>
      <Link to="/" className={styles.logoWrapper}>
        <Logo />
      </Link>
    </header>
  )
}

export default Header
