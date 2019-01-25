import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({
  activeClassName
})`
  text-decoration: none;
  color: ${props => props.theme.colors[2]};
  border-radius: 5%;
  text-align: center;
  width: ${props => props.width || '6rem'};
  padding: 0.5rem;

  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: bold;
    background-color: ${props => props.theme.fontColor};
    color: ${props => props.theme.backgroundColor};
  }

  &.${activeClassName} {
    border: 2px solid ${props => props.theme.fontColor};
  }
`;

const StyledSubLink = styled(StyledLink).attrs({
  activeClassName
})`
  &.${activeClassName} {
    border: unset;
    font-weight: bold;
    background-color: ${props => props.theme.fontColor};
    color: ${props => props.theme.backgroundColor};
  }
`;

export { StyledLink, StyledSubLink };