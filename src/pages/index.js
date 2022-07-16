import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/layout/Layout"
import Works from "../components/works/Works"

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Works />
    </Layout>
  )
}

export default IndexPage
