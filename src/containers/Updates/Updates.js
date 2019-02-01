import React, { Component } from 'react';
import styled from 'styled-components';

class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: undefined
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/lmuller18/dark-amazon/commits')
      .then(results => results.json())
      .then(data => {
        this.setState({ updates: data });
      });
  }

  render = () => {
    return (
      <div>
        {this.state.updates &&
          this.state.updates.map(c => {
            return (
              <CommitWrapper key={c.sha} href={c.html_url} target="_blank">
                <Avatar
                  src={c.author.avatar_url}
                  color={this.props.theme.fontColor}
                  height="50"
                  width="50"
                />
                <div style={{ width: '100%' }}>
                  <CommitHeader>
                    <Author theme={this.props.theme}>{c.author.login}</Author>
                    <CommitDate theme={this.props.theme}>
                      {new Date(c.commit.author.date).toDateString()}
                    </CommitDate>
                  </CommitHeader>
                  <Message>{c.commit.message}</Message>
                </div>
              </CommitWrapper>
            );
          })}
      </div>
    );
  };
}

const CommitHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Author = styled.h4`
  color: ${props => props.theme.colors[1]};
  margin: 0;
`;

const CommitDate = styled.h6`
  color: ${props => props.theme.colors[1]};
  margin: 0 0 0 1rem;
`;

const Message = styled.h5`
  margin: 0;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  margin-right: 1rem;
  min-width: 50px;
`;

const CommitWrapper = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 2px solid grey;
  padding: 1rem 0;
  cursor: pointer;

  &:last-child {
    border-bottom: unset;
  }
`;

export default Updates;
