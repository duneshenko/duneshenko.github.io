import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"

import { useFirstMount } from "../../contexts/FirstMountContext"
import * as styles from "./Bio.module.css"

const Bio = () => {
  const isFirstMount = useFirstMount("Bio")

  return (
    <div className={styles.column}>
      <div className={classNames(styles.photoWrapper, {"appear-bottom": isFirstMount})}>
        <StaticImage
          src="../../assets/images/photo.webp"
          alt="Roman Duneshenko"
          layout="fullWidth"
          aspectRatio={0.7}
        />
      </div>
      <div className={classNames(styles.bio, {"appear-left": isFirstMount})}>
        As a director, Roman enjoys working
        with visually appealing stories that
        resonate on an emotional level. While
        directing, he loves experimenting with
        visuals, working with rhythm, clip
        forms of story. His videos are full<br/>
        of strive for beautiful manifestos and
        modern formalistic techniques.
      </div>
      <div className={classNames(styles.publications, {"appear-left": isFirstMount})}>
        <h3 className={styles.header}>
          Publications
        </h3>
        <ul className={styles.publicationList}>
          <li className={styles.publicationListItem}>
            <a
              href="https://www.beyondtheshort.com/short-film/into-the-dark-roman-duneshenko"
              target="_blank"
              rel="noreferrer"
            >
              Beyond the shorts
            </a>
          </li>
          <li className={styles.publicationListItem}>
            <a
              href="https://filmshortage.com/shorts/in-the-dark/"
              target="_blank"
              rel="noreferrer"
            >
              Filmshortage
            </a>
          </li>
          <li className={styles.publicationListItem}>
            <a
              href="https://retrospectiveofjupiter.com/films/in-the-dark/"
              target="_blank"
              rel="noreferrer"
            >
              Retrospective of jupiter
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Bio
