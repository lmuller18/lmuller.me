import React from "react"

import Layout from "./../components/Layout"
import SEO from "./../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <span style={{ fontFamily: '"Fira Mono", monospace' }}>
      Hello there. I guess that you're here to read about me which sucks for you
      because I'm bad at writing about myself.
    </span>
  </Layout>
)

export default IndexPage
