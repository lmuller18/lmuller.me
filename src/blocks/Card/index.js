import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

const Card = styled.div`
  padding: 1rem;
  background-color: ${themeGet("colors.primary")};
  border: 2px solid ${themeGet("colors.borders")};
  box-shadow: 5px 6px 0px ${themeGet("colors.borders")};
  max-width: 98%;
  width: 1216px;
`

const Profile = styled(Card)`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`

const Media = styled(Card)`
  padding: unset;
  max-width: unset;
  width: unset;
  height: 530px;
  min-width: 286px;

  border-radius: 5px;

  background-color: ${themeGet("colors.secondary")};
  box-shadow: 5px 6px 0px ${themeGet("colors.background")};
`

const Body = styled.div`
  padding: 1rem;
`

const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;

  padding: 40px;
  background: linear-gradient(270deg, #4b1a58, #8b4076);
  padding-bottom: 0;
`

Card.Profile = Profile
Card.Media = Media

Card.Image = Image
Card.Body = Body

export default Card
