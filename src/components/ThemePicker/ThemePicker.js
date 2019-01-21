import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ColorBubble from '../Shared/ColorBubble';
import './ThemePicker.scss';
import styled from 'styled-components';
import { FormatColorFill } from 'styled-icons/material';

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showThemes: false
    };
  }

  changeTheme = theme => {
    this.setState({
      showThemes: false
    });
    this.props.changeTheme(theme);
  };

  toggleShowThemes = () => {
    this.setState({
      showThemes: !this.state.showThemes
    });
  };

  render = () => {
    const transitionOptions = {
      transitionName: 'themes',
      transitionEnterTimeout: 250,
      transitionLeaveTimeout: 250
    };

    var component;
    if (this.state.showThemes) {
      component = this.renderList();
    }

    return (
      <div>
        <ThemeButton
          color={this.props.theme.fontColor}
          onClick={this.toggleShowThemes}
        />
        <ReactCSSTransitionGroup {...transitionOptions}>
          {component}
        </ReactCSSTransitionGroup>
      </div>
    );
  };

  renderList = () => {
    return (
      <div className="theme-list">
        {this.props.themes.map((theme, index) => {
          return (
            <ColorBubble
              changeTheme={this.changeTheme}
              theme={theme}
              key={`color-${index}`}
            />
          );
        })}
      </div>
    );
  };
}

export const ThemeButton = styled(FormatColorFill)`
  color: {this.props.color};
  cursor: pointer;

  height: 50px;
  width: 50px;

`;

export default ThemePicker;
