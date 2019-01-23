import React from 'react';
import './Greeting.scss';

class Greeting extends React.Component {
  render = () => {
    return (
      <div style={{ color: `${this.props.theme.fontColor}` }}>
        <h1>Liam Muller</h1>

        <p>
          Liam Muller is a fifth-year <strong>Computer Science</strong> student
          with a passion for web development
        </p>
      </div>
    );
  };
}

export default Greeting;
