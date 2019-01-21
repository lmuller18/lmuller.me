import React from 'react';
import './Projects.scss';
import * as contentful from 'contentful';
import Project from '../../components/Project/Project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };

    this.client = contentful.createClient({
      space: 'k2rcyybgppgm',
      accessToken:
        '2fda784da23b9ec886c5db80b7b843fc207939df9fd684c8541d4280bca03eec'
    });
  }

  componentDidMount = () => {
    this.fetchProjects().then(this.setProjects);
  };

  fetchProjects = () => {
    return this.client.getEntries();
  };

  setProjects = response => {
    const projects = [...response.items];
    console.log(projects);
    this.setState({
      projects
    });
  };

  render = () => {
    return (
      <React.Fragment>
        {this.state.projects.map((project, index) => {
          return (
            <Project
              fields={project.fields}
              key={`projects-${index}`}
              theme={this.props.theme}
            />
          );
        })}
      </React.Fragment>
    );
  };
}

export default Projects;
