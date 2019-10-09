import styled from "styled-components"

const Card = styled.div`
  padding: 1rem;
  background-color: #141f2d;
  border: 2px solid #010b1b;
  box-shadow: 5px 6px 0px #010b1b;
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

Card.Profile = Profile

export default Card
