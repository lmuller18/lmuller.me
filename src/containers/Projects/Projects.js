import React from 'react';
import './Projects.scss';
import * as contentful from 'contentful';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { StyledSubLink } from '../../components/Shared/Styled';
import { initAnalytics } from '../../components/Shared/Analytics';

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

    initAnalytics('projects');
  }

  componentDidMount = () => {
    this.fetchProjects().then(this.setProjects);
  };

  fetchProjects = () => {
    return this.client.getEntries({ content_type: 'descriptionBlock' });
  };

  setProjects = response => {
    const projects = [...response.items].sort(
      (a, b) => a.sys.createdAt - b.sys.createdAt
    );
    this.setState({
      projects
    });
  };

  render = () => {
    if (this.state.projects.length === 0) {
      return <div>Loading</div>;
    }

    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <Route
                exact
                path="/projects"
                render={() => (
                  <Redirect
                    to={`/projects/${this.state.projects[0].fields.title}`}
                  />
                )}
              />

              <div className="link-container">
                {this.state.projects.map((project, index) => {
                  return (
                    <StyledSubLink
                      theme={this.state.theme}
                      key={`projects-${index}`}
                      width={'10rem'}
                      to={`/projects/${project.fields.title}`}
                    >
                      {project.fields.title}
                    </StyledSubLink>
                  );
                })}
              </div>

              <div>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <div>
                      <Switch>
                        {this.state.projects.map((project, index) => {
                          return (
                            <Route
                              path={`/projects/${project.fields.title}`}
                              key={`projects-${index}`}
                              render={() => (
                                <Project
                                  fields={project.fields}
                                  theme={this.props.theme}
                                />
                              )}
                            />
                          );
                        })}
                        <Route render={() => <div>Not Found!</div>} />
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          )}
        />
      </Router>
    );
  };
}

export default Projects;
