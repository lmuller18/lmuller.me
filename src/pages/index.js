import React from "react"

import styled from "styled-components"
import * as L from "layout-styled-components"

import Layout from "./../components/Layout"
import Typography from "../elements/Typography"
import Card from "./../blocks/Card"
import MediaCard from "./../components/Shared/MediaCard"
import Spacer from "../elements/Spacer"
import mw2 from "./../images/mw2.png"
import raidr from "./../images/raidr_project.png"

const IndexPage = () => (
  <Layout>
    <L.Vertical center>
      <Card>
        <Typography variant="h1">Projects</Typography>
        <Projects />
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

const Projects = () => {
  const projects = [
    {
      image: raidr,
      title: "Raidr",
      description: "This was a really fun video game",
    },
    {
      image: mw2,
      title: "Modern Warfare 2",
      description: "This was a really fun video game",
    },
    {
      image: mw2,
      title: "Modern Warfare 2",
      description: "This was a really fun video game",
    },
  ]

  return (
    <L.Horizontal center fullW spaceBetween wrap style={{ marginTop: -10 }}>
      {projects.map((p, i) => (
        <Project>
          <MediaCard
            key={i}
            image={p.image}
            title={p.title}
            description={p.description}
          />
        </Project>
      ))}
    </L.Horizontal>
  )
}

const Project = styled.div`
  flex-basis: 33%;
  margin-top: 10px;
`

MediaCard.Project = Project

export default IndexPage
