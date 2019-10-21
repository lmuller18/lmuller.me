import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import * as L from "layout-styled-components"

import Typography from "../elements/Typography"
import Card from "./../blocks/Card"
import MediaCard from "./../components/Shared/MediaCard"
import Spacer from "../elements/Spacer"
import raidr from "./../images/raidr.png"

const IndexPage = () => (
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
)

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allContentfulProject {
        edges {
          node {
            name
            shortDescription {
              shortDescription
            }
            preview {
              fluid(maxHeight: 800) {
                src
              }
            }
            description {
              description
            }
          }
        }
      }
    }
  `)

  const projects = data.allContentfulProject.edges.map(({ node }) => ({
    ...node,
    image: node.preview.fluid.src,
    shortDescription: node.shortDescription.shortDescription,
    description: node.description.description,
  }))

  return (
    <L.Horizontal
      center
      fullW
      spaceBetween
      wrap
      style={{ marginTop: -10, marginRight: -10 }}
    >
      {projects.map((p, i) => (
        <Project key={i}>
          <MediaCard
            image={p.image}
            title={p.name}
            description={p.shortDescription}
          />
        </Project>
      ))}
    </L.Horizontal>
  )
}

const Project = styled.div`
  flex-basis: 30%;
  margin-top: 10px;
  margin-right: 10px;
  flex-grow: 1;
`

MediaCard.Project = Project

export default IndexPage
