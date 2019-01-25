import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';
import "./Project.scss";
import CodeBlock from './code-block';
class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { title, description } = this.props.fields;
    return (
      <div>
        <h1 style={{ color: `${this.props.theme.colors[3]}` }}>{title}</h1>
        <div
          style={{ color: `${this.props.theme.fontColor}`, h1: { color: `white` } }}
        >
          <MarkdownStyles theme={this.props.theme}>
            <ReactMarkdown escapeHtml={false} source={description} renderers={{ code: CodeBlock }} />
          </MarkdownStyles>
        </div>
      </div>
    );
  };
}


const MarkdownStyles = styled.div`
  & a {
    text-decoration: none;
    text-underline: none;
    font-weight: bold;
    color: ${props => props.theme.colors[3]}
  }

  & ul {
    color: ${props => props.theme.colors[2]}
  }

  & img {
    max-height: 380px;
    width: auto;
  }
`

export default Project;
