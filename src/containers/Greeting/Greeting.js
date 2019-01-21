import React from 'react';
import './Greeting.scss';

class Greeting extends React.Component {
  render = () => {
    return (
      <div>
        <h1 style={{ color: `${this.props.theme.fontColor}` }}>Liam Muller</h1>
      </div>
    );
  };
}

export default Greeting;
