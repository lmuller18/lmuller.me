import styled from "styled-components"

const Spacer = styled.div`
  ${props => props.height && `height: ${props.height}px;`}
  ${props => props.width && `width: ${props.width}px;`}
  ${props => props.hidden && `visibility: hidden;`}
`

export default Spacer
