import React from "react"

import * as L from "layout-styled-components"

import Profile from "./../Profile"
import { Spacer } from "./../Shared"

const Header = ({ name, description, attributes }) => (
  <L.Vertical>
    <Spacer height={20} />
    <L.Horizontal center>
      <Profile name={name} description={description} attributes={attributes} />
    </L.Horizontal>
  </L.Vertical>
)

export default Header
