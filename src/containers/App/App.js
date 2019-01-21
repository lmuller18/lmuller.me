import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { ThemeProvider } from 'styled-components';
import { ThemeParticles } from '../../components/Shared/Util';
import { themes } from '../../components/Shared/Shared';
import ThemePicker from '../../components/ThemePicker/ThemePicker';
import Greeting from '../Greeting/Greeting';
import Projects from '../Projects/Projects';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes[0], themes };
  }

  changeTheme = theme => {
    this.setState({
      theme: theme
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <div className="particles-container">
            <Particles
              params={ThemeParticles(this.state.theme.particleColor)}
              width="100%"
              height="100vh"
              style={{ background: `${this.state.theme.backgroundColor}` }}
            />
          </div>
          <div className="header">
            <Greeting theme={this.state.theme} />
            <ThemePicker
              theme={this.state.theme}
              themes={this.state.themes}
              changeTheme={this.changeTheme}
            />
          </div>

          <Projects theme={this.state.theme} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
