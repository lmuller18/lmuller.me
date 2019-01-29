import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';
import './Project.scss';
import CodeBlock from './code-block';
import { Header1 } from '../Shared/Styled';

const Project = props => {
  const { title, description } = props.fields;
  return (
    <div>
      <Header1 color={props.theme.colors[3]}>{title}</Header1>
      <MarkdownStyles theme={props.theme}>
        <ReactMarkdown
          escapeHtml={false}
          source={description}
          renderers={{ code: CodeBlock }}
        />
      </MarkdownStyles>
    </div>
  );
}

const MarkdownStyles = styled.div`
  color: ${props => props.theme.fontColor};

  & a {
    text-decoration: none;
    text-underline: none;
    font-weight: bold;
    color: ${props => props.theme.colors[3]};
  }

  & ul {
    color: ${props => props.theme.colors[2]};
  }

  & img {
    max-height: 380px;
    width: auto;
  }
`;

export default Project;
