import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/layout/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo />
      <main style={{ padding: "3em 0", textAlign: "center" }}>
        <div style={{ fontSize: "4.7em" }}>
          404
        </div>
        <div style={{ textTransform: "uppercase" }}>
          Page not found
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
