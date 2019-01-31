import React, { Component } from 'react';

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
        console.log(data);
        this.setState({ updates: data });
      });
  }

  render = () => {
    return (
      <div>
        {this.state.updates &&
          this.state.updates.map(c => {
            return (
              <div key={c.sha}>
                <div>{c.commit.author.name}</div>
                <div>{c.commit.message}</div>
              </div>
            );
          })}
      </div>
    );
  };
}

export default Updates;
