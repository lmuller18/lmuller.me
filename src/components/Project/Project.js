import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { title, description } = this.props.fields;
    return (
      <React.Fragment>
        <h1 style={{ color: `${this.props.theme.fontColor}` }}>{title}</h1>
        <div style={{ color: `${this.props.theme.fontColor}` }}>
          <ReactMarkdown escapeHtml={false} source={description} />
        </div>
      </React.Fragment>
    );
  };
}

export default Project;
