import styled from "styled-components"
import Avatar from "./Avatar"

const About = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 6%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 620px) {
    margin-left: 0;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`

const Links = styled.div``

About.Avatar = Avatar
About.Details = Details
About.Links = Links

export default About
