import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${ props => props.theme.colors[2]};
  border-radius: 5%;
  text-align: center;
  width: ${props => props.width || '6rem'};
  padding: .5rem;

  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: bold;
    background-color: ${props => props.theme.fontColor};
    color: ${props => props.theme.backgroundColor};
  }
  `;

export { StyledLink };