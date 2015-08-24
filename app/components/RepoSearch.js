'use strict';

import React from 'react';
import Router from 'react-router';
import '../styles/Main.css';

export default React.createClass({
  mixins: [Router.Navigation],
  handleSearch() {
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode.value = '';
    this.transitionTo('reporesults', { username: username });
  },
  render() {
    return (
      <div className="search-container">
        <h1>GitHub Contributors</h1>
        <input type="text" ref="username" />
        <button onClick={this.handleSearch}>Search Repos</button>
      </div>
    )
  }
})
