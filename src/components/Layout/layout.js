/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Spacer } from "./../Shared"
import * as L from "layout-styled-components"
import Card from "./../Card"
import Header from "./../Header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          name
          description
          attributes {
            key
            value
          }
        }
      }
    }
  `)

  const { name, description, attributes } = data.site.siteMetadata

  return (
    <>
      <Header name={name} description={description} attributes={attributes} />

      <main>
        <L.Vertical>
          <Spacer height={20} />
          <L.Horizontal center>
            <Card>{children}</Card>
          </L.Horizontal>
        </L.Vertical>
      </main>
      <footer>
        <L.Vertical>
          <Spacer height={20} />
          <L.Horizontal center>
            <Card>
              {" "}
              © {new Date().getFullYear()}, Built with
              {` `}
              <a style={{ color: "inherit" }} href="https://www.gatsbyjs.org">
                Gatsby
              </a>
            </Card>
          </L.Horizontal>
        </L.Vertical>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
