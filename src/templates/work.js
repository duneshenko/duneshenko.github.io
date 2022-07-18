import React from "react"
import { Link, graphql } from "gatsby"
import classNames from "classnames"

import Arrow from "../assets/images/arrow.svg"
import Seo from "../components/Seo"
import Layout from "../components/layout/Layout"
import * as styles from "./work.module.css"

const WorkPage = ({ data, pageContext }) => {
  const { work } = data
  const { previousWork, nextWork } = pageContext

  return (
    <Layout>
      <main className={styles.content}>
        <Seo pageTitle={work.name} />
        <h3 className={styles.header}>
          {work.name} '{work.type}'
        </h3>
        <div className={styles.work}>
          <div className={styles.videoContainer}>
            <iframe
              src={work.embed}
              className={styles.video}
              title={work.name}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          </div>
          <Link to={`/${previousWork.slug}/`} className={classNames(styles.link, styles.prev)}>
            <Arrow className={styles.arrow} />
          </Link>
          <Link to={`/${nextWork.slug}/`} className={classNames(styles.link, styles.next)}>
            <Arrow className={styles.arrow} />
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default WorkPage

export const query = graphql`
  query($id: String) {
    work(id: {eq: $id}) {
      name
      type
      embed
    }
  }
`
