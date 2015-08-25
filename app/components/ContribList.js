'use strict';

import React from 'react';
import ContribStore from '../stores/ContribStore';
import ContribActions from '../actions/ContribActions';
import Router from 'react-router';
import ContribItem from './ContribItem';

export default React.createClass({
  mixins: [Router.State],
  getInitialState() {
    return ContribStore.getState()
  },
  componentWillMount() {
    var params = this.getParams()
    ContribActions.fetchContribs(params.username, params.repo)
    ContribStore.listen(this.onChange)
  },
  componentWillUnmount() {
    ContribStore.unlisten(this.onChange)
  },
  onChange() {
    this.setState(ContribStore.getState())
  },
  render() {
    return (
      <div>
        <h1 className="proj-contrib">Project Contributors</h1>
        <ul className="contrib-list">
          {this.state.contribs.map(function(contrib) {
            return <ContribItem key={contrib.id} contrib={contrib} />
          })}
        </ul>
      </div>
    )
  }
});
