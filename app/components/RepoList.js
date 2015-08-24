'use strict';

import React from 'react';
import RepoStore from '../stores/RepoStore';
import RepoActions from '../actions/RepoActions';
import RepoItem from './RepoItem';

export default React.createClass({
  getInitialState() {
    return RepoStore.getState()
  },
  componentWillMount() {
    RepoStore.listen(this.onChange)
  },
  componentWillUnmount() {
    RepoStore.unlisten(this.onChange)
  },
  onChange() {
    this.setState(RepoStore.getState())
  },
  renderRepos() {
    return this.state.repos.map((repo) => {
      return (
        <RepoItem key={repo['id']} repo={repo} />
      )
    })
  },
  render() {
    return (
      <div>
        <h2 className="pub-repos"> Public Repositories </h2>
        <ul> {this.renderRepos()}</ul>
      </div>
    )
  }
});
