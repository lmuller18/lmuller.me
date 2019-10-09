import React from "react"
import styled from "styled-components"
import { space, typography, compose } from "styled-system"

const Typography = styled(({ variant: Component = "span", ...props }) => (
  <Component {...props} />
))`
  a {
    color: inherit;
  }

  ${props => props.texttransform && `text-transform: ${props.texttransform};`}

  ${compose(
    space,
    typography
  )}
`

export default Typography
