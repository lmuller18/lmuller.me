import styled from "styled-components"
import Avatar from "./../Avatar"

const ProfileAvatar = styled(Avatar).attrs(() => ({ size: 300 }))`
  background-color: #010c1f;
  border: 4px solid white;
  max-width: 220px;
  max-height: 220px;
  margin-right: 20px;
`

export default ProfileAvatar
