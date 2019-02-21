import React from 'react';
import styled from 'styled-components';
import { initAnalytics, logEvent } from '../../components/Shared/Analytics';
import ReactMarkdown from 'react-markdown/with-html';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import * as contentful from 'contentful';
import { Link } from 'react-router-dom';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: undefined
    };

    this.client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY
    });

    initAnalytics('resume');
  }

  componentDidMount = () => {
    this.fetchResume().then(this.setResume);
  };

  fetchResume = () => {
    return this.client.getEntry('5gIbOdSnd7rQJjtPmIxhPy');
  };

  setResume = response => {
    this.setState({
      resume: response.fields.resume
    });
  };

  render = () => {
    if (!this.state.resume) {
      return <div>Loading</div>;
    }

    return (
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300}>
          <StyledResume theme={this.props.theme}>
            <DownloadContainer>
              <DownloadLink
                to="/resume.pdf"
                target="_blank"
                theme={this.props.theme}
                onClick={event => this.toResume}
              >
                Download
              </DownloadLink>
            </DownloadContainer>
            <ReactMarkdown escapeHtml={false} source={this.state.resume} />
          </StyledResume>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  toResume = event => {
    event.preventDefault();
    logEvent('Resume', 'Download Resume');
    window.open(this.makeHref('/resume.pdf'));
  };
}

const DownloadLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors[2]};
  border-radius: 5%;
  text-align: center;
  width: ${props => props.width || '6rem'};
  padding: 0.5rem;

  transition: all 0.25s ease-in-out;

  @media (hover: hover) {
    &:hover {
      font-weight: bold;
      background-color: ${props => props.theme.fontColor};
      color: ${props => props.theme.backgroundColor};
    }
  }
  cursor: pointer;
`;

const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledResume = styled.div`
  * {
    color: ${props => props.theme.fontColor};
  }

  h1 {
    color: ${props => props.theme.colors[1]};
  }

  h3 {
    color: ${props => props.theme.colors[2]};
  }
`;

export default Resume;
