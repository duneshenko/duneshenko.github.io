import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ pageTitle }) => {
  const siteTitle = "Roman Duneshenko"
  const title = (
    pageTitle
      ? `${pageTitle} | ${siteTitle}`
      : siteTitle
  )

  return (
    <Helmet title={title} />
  )
}

export default Seo
