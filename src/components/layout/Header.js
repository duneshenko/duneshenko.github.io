import React, { useCallback } from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import { useFirstMount } from "../../contexts/FirstMountContext"
import Logo from "../../assets/images/logo.svg"
import * as styles from "./Header.module.css"

const Header = () => {
  const isFirstMount = useFirstMount("Header")

  const showContacts = useCallback(() => {
    document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
  }, [])

  return (
    <header className={styles.header}>
      <nav className={classNames(styles.navigation, {"appear-right": isFirstMount})}>
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
      <Link to="/" className={classNames(styles.logoWrapper, {"appear-left": isFirstMount})}>
        <Logo />
      </Link>
    </header>
  )
}

export default Header
