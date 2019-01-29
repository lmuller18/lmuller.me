import React from 'react';
import './ColorBubble.scss';

const changeTheme = props => {
  props.changeTheme(props.theme);
}

const ColorBubble = props => {
  return (
    <div
      onClick={() => changeTheme(props)}
      className="colorBubble"
      style={{
        backgroundColor: props.theme.backgroundColor,
        border: `2px solid ${props.theme.fontColor}`
      }}
    />
  );
}

export default ColorBubble;
