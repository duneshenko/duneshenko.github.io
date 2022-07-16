import React, { useRef } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import classNames from "classnames"

import { useAutoplay } from "./Autoplayer"
import Video from "./Video"
import * as styles from "./Card.module.css"

const Card = ({ work }) => {
  const image = getImage(work.image)
  const videos = work.video.map((video) => ({
    src: video.src.publicURL,
    type: video.type
  }))

  const ref = useRef()
  const autoplay = useAutoplay(ref.current)

  return (
    <div>
      <div className={styles.title}>{work.name} '{work.type}'</div>
      <Link to={`/${work.slug}/`} className={styles.link} ref={ref}>
        <Video videos={videos} className={classNames(styles.video, {[styles.autoplay]: autoplay})} />
        <GatsbyImage image={image} alt={work.name} className={styles.image} />
      </Link>
    </div>
  )
}

export default Card
