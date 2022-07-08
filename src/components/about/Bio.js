import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./Bio.module.css"

const Bio = () => (
  <div className={styles.column}>
    <div className={styles.photoWrapper}>
      <StaticImage src="../../assets/images/photo.jpg" alt="Roman Duneshenko" />
    </div>
    <div className={styles.bio}>
      As a director, Roman enjoys working
      with visually appealing stories that
      resonate on an emotional level. While
      directing, he loves experimenting with
      visuals, working with rhythm, clip
      forms of story. His videos are full<br />
      of strive for beautiful manifestos and
      modern formalistic techniques.
    </div>
    <div className={styles.publications}>
      <h3 className={styles.header}>
        Publications
      </h3>
      <ul className={styles.publicationList}>
        <li className={styles.publicationListItem}>
          <a href="https://www.beyondtheshort.com/short-film/into-the-dark-roman-duneshenko" target="_blank" rel="noreferrer">
            Beyond the shorts
          </a>
        </li>
        <li className={styles.publicationListItem}>
          <a href="https://filmshortage.com/shorts/in-the-dark/" target="_blank" rel="noreferrer">
            Filmshortage
          </a>
        </li>
        <li className={styles.publicationListItem}>
          <a href="https://retrospectiveofjupiter.com/films/in-the-dark/" target="_blank" rel="noreferrer">
            Retrospective of jupiter
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Bio
