import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import classNames from "classnames"

import * as styles from "./Footer.module.css"

const Footer = () => {
  const { isFooterHighlighted } = useFooterHighlighter()

  return (
    <footer className={classNames(styles.footer, {[styles.highlighted]: isFooterHighlighted})}>
      <div className={styles.footerContent}>
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
      </div>
    </footer>
  )
}

const FooterHighlighterContext = createContext({
  isFooterHighlighted: false,
  highlightFooter: () => {},
})

export const FooterHighlighter = ({ timeout = 1200, children }) => {
  const [isFooterHighlighted, setIsFooterHighlighted] = useState(false)

  const highlightFooter = useCallback(() => {
    setIsFooterHighlighted(true)
  }, [setIsFooterHighlighted])

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsFooterHighlighted(false)
    }, timeout)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [isFooterHighlighted, setIsFooterHighlighted, timeout])

  return (
    <FooterHighlighterContext.Provider value={{ isFooterHighlighted, highlightFooter }}>
      {children}
    </FooterHighlighterContext.Provider>
  )
}

export const useFooterHighlighter = () => {
  return useContext(FooterHighlighterContext)
}

export default Footer
