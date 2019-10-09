import styled from "styled-components"

const Avatar = styled.img`
  vertical-align: middle;
  width: ${({ size }) => size || "50"}px;
  height: ${({ size }) => size || "50"}px;
  border-radius: 50%;
`

export default Avatar
