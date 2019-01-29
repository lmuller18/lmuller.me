import React from 'react';
import styled from 'styled-components';
import './Greeting.scss';

class Greeting extends React.Component {
  render = () => {
    return (
      <StyledGreeting color={this.props.theme.fontColor}>
        <img
          id="profile-pic"
          style={{ border: `2px solid ${this.props.theme.fontColor}` }}
          src={require('./profile-pic.jpg')}
          alt="Profile"
          width="100"
          height="100"
        />
        <div>
          <h1 style={{ color: `${this.props.theme.colors[1]}` }}>
            Liam Muller
          </h1>
          <p>
            Liam Muller is a fifth-year <strong>Computer Science</strong>{' '}
            student with a passion for web development.
          </p>
        </div>
      </StyledGreeting>
    );
  };
}

const StyledGreeting = styled.div`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Greeting;
