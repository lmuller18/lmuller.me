import styled from "styled-components"

const Experience = styled.div`
  flex-basis: 30%;
  border-left: 1px solid white;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 620px) {
    border-left: none;
  }

  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Pair = styled.div`
  font-family: "Fira Mono", monospace;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 620px) {
    flex-basis: 33%;
    flex-grow: 1;
    flex-shrink: 0;
  }
`

const Key = styled.span`
  color: #cedad6;
  text-transform: lowercase;
  font-size: 15px;
`

const Value = styled.span``

Experience.Pair = Pair
Experience.Key = Key
Experience.Value = Value

export default Experience
