'use strict';

import React from 'react';
import Router from 'react-router';
import RepoActions from '../actions/RepoActions';

export default React.createClass({
  mixins: [Router.Navigation],
  handleSearch() {
    var username = this.refs.username.getDOMNode().value;
    RepoActions.fetchRepos(username);
    this.refs.username.getDOMNode.value = '';
    this.transitionTo('reporesults', { username: username });
  },
  render() {
    return (
      <div className="search-container">
        <h1>Public Repositories</h1>
        <input type="text" ref="username" />
        <button onClick={this.handleSearch}>Search Repos</button>
      </div>
    )
  }
})
