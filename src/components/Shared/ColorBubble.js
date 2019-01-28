import React from 'react';
import './ColorBubble.scss';

function changeTheme(props) {
  props.changeTheme(props.theme);
}

export default function ColorBubble(props) {
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
