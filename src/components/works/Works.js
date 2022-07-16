import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"

import { useFirstMount } from "../../contexts/FirstMountContext"
import Card from "./Card"
import * as styles from "./Works.module.css"

const Works = () => {
  const isFirstMount = useFirstMount("Works")

  const data = useStaticQuery(graphql`
    query {
      allWork {
        nodes {
          id
          slug
          name
          type
          image {
            childImageSharp {
              gatsbyImageData(
                width: 2000
              )
            }
          }
          video {
            src {
              publicURL
            }
            type
          }
        }
      }
    }
  `)

  const works = []

  for (const work of data.allWork.nodes) {
    works[work.slug] = work
  }

  return (
    <div className={classNames(styles.cards, {"appear-bottom": isFirstMount})}>
      <div className={styles.card2}><Card work={works['in-the-dark']} /></div>
      <div className={styles.card1}><Card work={works['feel']} /></div>
      <div className={styles.card3}><Card work={works['game']} /></div>
      <div className={styles.card4}><Card work={works['yandex-lavka']} /></div>
      <div className={styles.card5}><Card work={works['antonio-banderas-perfume']} /></div>
      <div className={styles.card6}><Card work={works['youth']} /></div>
    </div>
  )
}

export default Works
