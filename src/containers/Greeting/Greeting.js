import React from 'react';
import './Greeting.scss';

class Greeting extends React.Component {
  render = () => {
    return (
      <div style={{
        color: `${this.props.theme.fontColor}`,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <img id="profile-pic" style={{ border: `2px solid ${this.props.theme.fontColor}` }} src={require("./profile-pic.jpg")} alt="Profile Picture" width="100" height="100" />
        <div>
          <h1 style={{ color: `${this.props.theme.colors[1]}` }}>Liam Muller</h1>
          <p>
            Liam Muller is a fifth-year <strong>Computer Science</strong> student
            with a passion for web development
        </p>
        </div>
      </div>
    );
  };
}

export default Greeting;
