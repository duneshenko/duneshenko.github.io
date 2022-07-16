import React from "react"

import * as styles from "./Awards.module.css"
import classNames from "classnames"

import { useFirstMount } from "../../contexts/FirstMountContext"

const Awards = () => {
  const isFirstMount = useFirstMount("Awards")

  return (
    <div className={classNames(styles.column, {"appear-right": isFirstMount})}>
      <h3 className={styles.header}>Awards</h3>
      <div className={styles.awards}>
        <div className={styles.title}>Short film 'FEEL'</div>
        <div className={styles.year}>2020</div>
        <div className={styles.nomination}>Winner</div>
        <div className={styles.festivalList}>
          <div className={styles.festivalListItem}>Short Shot Fest</div>
        </div>
        <div className={styles.year}>2021</div>
        <div className={styles.nomination}>Award Winner</div>
        <div className={styles.festivalList}>
          <div className={styles.festivalListItem}>Metropolis Film Festival</div>
        </div>
        <div className={styles.nomination}>Best Supershort Film</div>
        <div className={styles.festivalList}>
          <div className={styles.festivalListItem}>Stockholm City Film Festival</div>
        </div>
        <div className={styles.nomination}>Best Visual Art</div>
        <div className={styles.festivalList}>
          <div className={styles.festivalListItem}>Unknown film festival</div>
          <div className={styles.festivalListItem}>Sunday Shorts Film Festival</div>
          <div className={styles.festivalListItem}>Ambitus Film Festival</div>
          <div className={styles.festivalListItem}>Kolkata International MicroFilm Festival imffkolkata</div>
          <div className={styles.festivalListItem}>INCA Imperial International Film festival</div>
          <div className={styles.festivalListItem}>Ambitus Film Festival</div>
          <div className={styles.festivalListItem}>Kerala Short Film Festival</div>
          <div className={styles.festivalListItem}>Moscow Indie Film Festival</div>
        </div>
        <div className={styles.nomination}>Official selection</div>
        <div className={styles.festivalList}>
          <div className={styles.festivalListItem}>Filmstrip International Film Festival</div>
        </div>
        <div className={styles.title}>Short film 'IN THE DARK'</div>
        <div className={styles.year}>2021</div>
        <div className={styles.nomination}>Official selection</div>
        <div className={styles.festivalList}>
          <div className={styles.festivalListItem}>Unknown film festival</div>
        </div>
      </div>
    </div>
  )
}

export default Awards
