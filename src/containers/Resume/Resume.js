import React from 'react';
import styled from 'styled-components';
import { StyledSubLink } from '../../components/Shared/Styled';
import ReactMarkdown from 'react-markdown/with-html';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import * as contentful from 'contentful';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: undefined
    };

    this.client = contentful.createClient({
      space: 'k2rcyybgppgm',
      accessToken:
        '2fda784da23b9ec886c5db80b7b843fc207939df9fd684c8541d4280bca03eec'
    });
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
              <StyledSubLink as="a" href="/resume.pdf" theme={this.props.theme}>Download</StyledSubLink>
            </DownloadContainer>
            <ReactMarkdown escapeHtml={false} source={this.state.resume} />
          </StyledResume>
        </CSSTransition>
      </TransitionGroup>
    );
  };
}

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
