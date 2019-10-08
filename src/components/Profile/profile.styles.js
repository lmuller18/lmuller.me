import React from "react"
import styled from "styled-components"

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Details = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 6%;
`

const About = styled.div`
  flex-basis: 30%;
  border-left: 1px solid white;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Pair = styled.div`
  font-family: "Fira Mono", monospace;
  display: flex;
  flex-direction: column;
`

const Key = styled.span`
  color: #cedad6;
  text-transform: lowercase;
  font-size: 15px;
`

const Value = styled.span``

const Image = ({ src }) => (
  <ImageContainer>
    <StyledImage src={src} />
  </ImageContainer>
)

const ImageContainer = styled.div`
  overflow: hidden;
  background-color: #010c1f;
  border: 4px solid #010c1f;
  width: 300px;
  height: 300px;
  border-radius: 200px;
  max-width: 220px;
  max-height: 220px;
  margin-right: 20px;
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Social = styled.div`
  display: flex;
  flex-direction: column;
`

const Links = styled.div``

const Credit = styled.span`
  font-family: "Fira Mono", monospace;
  font-size: 10px;

  a {
    color: inherit;
  }
`

const Description = styled.span`
  font-family: "Fira Mono", monospace;
`

const Name = styled.h1``

Profile.Details = Details
Profile.Image = Image
Profile.Social = Social
Profile.Name = Name
Profile.Links = Links
Profile.Description = Description
Profile.Credit = Credit

Pair.Key = Key
Pair.Value = Value

About.Pair = Pair

Profile.About = About

export default Profile
