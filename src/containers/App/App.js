import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
            <span className="o">`{short}/</span>
            <span className="b">${'{'}</span>
            <span className="l">usr</span>
            <span className="b">{'}'}</span>
            <span className="o">`</span>
          </a>
          <span className="w">;</span>
        </span>
      </h1>
    );
  };

  renderCall = (usr, platform, url) => {
    // declare comment to avoid eslint warning
    // about '//' in jsx
    const comment = `// ${url}`;
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
          <span className="c">{comment}</span>
        </a>
      </h1>
    );
  };

  renderMainContent = () => {
    const contact = [
      {
        platform: 'twitter',
        short: 'twitter.com',
        usr: 'lmuller18',
        url: 'https://twitter.com/lmuller18'
      },
      {
        platform: 'linkedin',
        short: 'linkedin.com/in',
        usr: 'liammuller',
        url: 'https://www.linkedin.com/in/liammuller/'
      },
      {
        platform: 'github',
        short: 'github.com',
        usr: 'lmuller18',
        url: 'https://github.com/lmuller18'
      }
    ];

    return (
      <div className="main-content">
        <div className="contact">
          {contact.map(c => this.renderFunc(c.platform, c.short, c.url))}

          {contact.map(c => this.renderCall(c.usr, c.platform, c.url))}
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
                  <hr />
                  <p style={{ color: this.state.theme.fontColor }}>
                    Built with React, React-Router, Styled-Components,
                    Contentful, and{' '}
                    <span role="img" aria-label="love">
                      💖
                    </span>
                  </p>
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
