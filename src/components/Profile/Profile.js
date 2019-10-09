import React from "react"

import Card from "./../../blocks/Card"

import Experience from "./../../blocks/Experience"
import About from "./../../blocks/About"

import Spacer from "./../../elements/Spacer"
import Typography from "./../../elements/Typography"

import useMobileDetection from "./../Shared/hooks/useMobileDetection"

import profilePic from "./../../images/avataaars_no_backdrop.png"

const Profile = ({ name, description, attributes }) => {
  const isMobile = useMobileDetection()
  return (
    <Card.Profile>
      <About>
        <About.Avatar src={profilePic}></About.Avatar>
        <Spacer height={10} hidden={!isMobile} />
        <About.Details>
          <Typography variant="h1">{name}</Typography>
          <Typography fontFamily="Fira Mono">{description}</Typography>
          <Spacer height={20} />
          <Typography fontFamily="Fira Mono" fontSize={10}>
            Card styles inspired by <a href="http://dev.to/lmuller18">dev.to</a>
            .
          </Typography>
        </About.Details>
      </About>
      <Spacer height={20} hidden={!isMobile} />
      <Experience>
        {attributes.map((attr, i) => (
          <React.Fragment key={attr.key}>
            <Experience.Pair>
              <Typography
                color="#cedad6"
                texttransform="lowercase"
                fontSize={15}
              >
                {attr.key}
              </Typography>
              <Spacer height={5} hidden={!isMobile} />
              <Typography>{attr.value}</Typography>
            </Experience.Pair>
            <Spacer height={15} hidden={i === attributes.length - 1} />
          </React.Fragment>
        ))}
      </Experience>
    </Card.Profile>
  )
}

export default Profile
