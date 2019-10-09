import styled from "styled-components"
import { flexbox, layout, compose } from "styled-system"

const Flex = styled.div`
  display: flex;
  ${compose(
    flexbox,
    layout
  )}
`

export default Flex
