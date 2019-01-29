import React from 'react';
import "./ContactInfo.scss";

class ContactInfo extends React.Component {
  renderFunc = (platform, short, url) => {
    return (
      <h1 key={platform}>
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
      <h1 key={platform}>
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

  render = () => {
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
}

export default ContactInfo;
