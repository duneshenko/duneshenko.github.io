import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Video from "./Video"
import * as styles from "./Card.module.css"

const Card = ({ work }) => {
  const image = getImage(work.image)
  const videos = work.video.map((video) => ({
    src: video.src.publicURL,
    type: video.type
  }))

  return (
    <div>
      <div className={styles.title}>{work.name} '{work.type}'</div>
      <Link to={`/${work.slug}/`} className={styles.link}>
        <Video videos={videos} className={styles.video} />
        <GatsbyImage image={image} alt={work.name} className={styles.image} />
      </Link>
    </div>
  )
}

export default Card
