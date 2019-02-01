import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { ThemeParticles } from '../../components/Shared/Util';
import { StyledLink, Paragraph } from '../../components/Shared/Styled';
import { themes, hexToRGB } from '../../components/Shared/Shared';
import ThemePicker from '../../components/ThemePicker/ThemePicker';
import Greeting from '../Greeting/Greeting';
import Projects from '../Projects/Projects';
import Updates from '../Updates/Updates';
import Resume from '../Resume/Resume';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes[0], themes, showUpdates: false };
  }

  changeTheme = theme => {
    this.setState({
      theme: theme
    });
  };

  toggleUpdates = showUpdates => {
    window.scrollTo(0, 0);
    this.setState({
      showUpdates
    });
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
                  <Route exact path="/" render={() => <ContactInfo />} />
                  <Route
                    path="/projects"
                    render={() => <Projects theme={this.state.theme} />}
                  />
                  <Route
                    path="/resume"
                    render={() => <Resume theme={this.state.theme} />}
                  />
                  <hr />
                  <Paragraph color={this.state.theme.fontColor}>
                    Built with React, React-Router, Styled-Components,
                    Contentful, and{' '}
                    <span role="img" aria-label="love">
                      💖
                    </span>
                    .
                  </Paragraph>
                  <Paragraph as="div" color={this.state.theme.fontColor}>
                    View Updates{' '}
                    <UpdatesLink onClick={() => this.toggleUpdates(true)}>
                      Here
                    </UpdatesLink>
                  </Paragraph>
                  <ReactCSSTransitionGroup
                    transitionName="slow-fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={200}
                  >
                    {this.state.showUpdates && (
                      <UpdatesContainer theme={this.state.theme}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <h1>Updates</h1>
                          <CloseUpdates
                            as="div"
                            onClick={() => this.toggleUpdates(false)}
                          >
                            Close
                          </CloseUpdates>
                        </div>
                        <Updates theme={this.state.theme} />
                      </UpdatesContainer>
                    )}
                  </ReactCSSTransitionGroup>
                </div>
              </div>
            </Router>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const CloseUpdates = styled(StyledLink)`
  cursor: pointer;
`;

const UpdatesLink = styled.span`
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

const UpdatesContainer = styled.div`
  max-width: 740px;
  margin: 0 auto;

  position: fixed;
  background-color: ${props => hexToRGB(props.theme.backgroundColor, 0.95)};
  color: ${props => props.theme.fontColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 2px solid ${props => props.theme.fontColor};
  padding: 1rem;
  top: 190px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`;

export default App;
