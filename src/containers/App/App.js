import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';
import { ThemeProvider } from 'styled-components';
import { ThemeParticles } from '../../components/Shared/Util';
import { StyledLink } from '../../components/Shared/Styled';
import { themes } from '../../components/Shared/Shared';
import ThemePicker from '../../components/ThemePicker/ThemePicker';
import Greeting from '../Greeting/Greeting';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
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

  renderFunc = (platform, short, url) => {
    return (
      <h1>
        <span>
          <span className="y">{platform}</span> <span className="w">=</span>{' '}
          <span className="l">usr </span> <span className="b">=></span>{' '}
        </span>
        <span>
          <a href={url}>
            <span className="o">
              `{short}.com/<span className="b">${'{'}</span>usr
              <span className="b">{'}'}</span>
            </span>
          </a>
          <span className="w">;</span>
        </span>
      </h1>
    );
  };

  renderCall = (usr, platform, url) => {
    return (
      <h1>
        <span>
          <span className="g">console</span>
          <span className="w">.</span>
          <span className="y">log</span>
          <span className="l">(</span>
        </span>

        <span>
          <span className="y">{platform}</span>(
          <span className="o">'{usr}'</span>))
          <span className="w">;</span>
        </span>
        <br />
        <a href={url}>
          <span className="c">// {url}</span>
        </a>
      </h1>
    );
  };

  renderMainContent = () => {
    return (
      <div className="main-content">
        <div className="contact">
          {this.renderFunc(
            'twitter',
            'twitter.com',
            'https://twitter.com/lmuller18'
          )}
          {this.renderFunc(
            'linkedin',
            'linkedin.com/in',
            'https://www.linkedin.com/in/liammuller/'
          )}
          {this.renderFunc(
            'github',
            'github.com',
            'https://github.com/lmuller18'
          )}

          {this.renderCall(
            'lmuller18',
            'twitter',
            'https://twitter.com/lmuller18'
          )}
          {this.renderCall(
            'liammuller',
            'linkedin',
            'https://www.linkedin.com/in/liammuller/'
          )}
          {this.renderCall(
            'lmuller18',
            'github',
            'https://github.com/lmuller18'
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <div className="theme-picker-container">
            <ThemePicker
              theme={this.state.theme}
              themes={this.state.themes}
              changeTheme={this.changeTheme}
            />
          </div>
          <div className="particles-container">
            <Particles
              params={ThemeParticles(this.state.theme.particleColor)}
              width="100%"
              height="100vh"
              style={{ background: `${this.state.theme.backgroundColor}` }}
            />
          </div>
          <div className="content">
            <div className="header">
              <Greeting theme={this.state.theme} />
            </div>
            <Router>
              <div>
                <div className="link-container">
                  <StyledLink exact to="/" theme={this.state.theme}>
                    Home
                  </StyledLink>
                  <StyledLink to="/projects" theme={this.state.theme}>
                    Projects
                  </StyledLink>
                  <StyledLink to="/resume" theme={this.state.theme}>
                    Resume
                  </StyledLink>
                </div>
                <hr />
                <div className="main">
                  <Route
                    exact
                    path="/"
                    render={() => this.renderMainContent()}
                  />
                  <Route
                    path="/projects"
                    render={() => <Projects theme={this.state.theme} />}
                  />
                  <Route
                    path="/resume"
                    render={() => <Resume theme={this.state.theme} />}
                  />
                </div>
              </div>
            </Router>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
