import React from 'react';
import './ColorBubble.scss';

class ColorBubble extends React.Component {
  changeTheme = () => {
    this.props.changeTheme(this.props.theme);
  };

  render = () => {
    return (
      <div
        onClick={this.changeTheme}
        className="colorBubble"
        style={{
          backgroundColor: this.props.theme.backgroundColor,
          border: `2px solid ${this.props.theme.fontColor}`
        }}
      />
    );
  };
}

export default ColorBubble;
