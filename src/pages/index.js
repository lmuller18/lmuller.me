import React from "react"

import * as L from "layout-styled-components"

import Layout from "./../components/Layout"
import Typography from "../elements/Typography"
import Card from "./../blocks/Card"
import Spacer from "../elements/Spacer"

const IndexPage = () => (
  <Layout>
    <L.Vertical center>
      <Card>
        <Typography variant="h1">Projects</Typography>
        <Typography fontFamily="Fira Mono">
          Hello there. I guess that you're here to read about me which sucks for
          you because I'm bad at writing about myself.
        </Typography>
      </Card>
      <Spacer height={20} />
      <Card>
        <Typography variant="h1">Mission</Typography>
        <Typography fontFamily="Fira Mono">
          Hello there. I guess that you're here to read about me which sucks for
          you because I'm bad at writing about myself.
        </Typography>
      </Card>
      <Spacer height={20} />
      <Card>
        <Typography variant="h1">Get in Touch</Typography>
        <Typography fontFamily="Fira Mono">
          Hello there. I guess that you're here to read about me which sucks for
          you because I'm bad at writing about myself.
        </Typography>
      </Card>
    </L.Vertical>
  </Layout>
)

export default IndexPage
