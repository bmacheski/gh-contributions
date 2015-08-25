'use strict';

import React from 'react';
import { Router, Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <li>
        <div className="pure-g">
          <div className="pure-u-2-3">
            <Link to="contribresults" params={{username: this.props.repo.owner.login, repo: this.props.repo.name}}>
              <h3>{this.props.repo.name}</h3>
            </Link>
            <p>{this.props.description}</p>
          </div>
          <div className="pure-u-1-3">
            <div className="pure-g">
              <div className="pure-u-1-3">
                <b>{this.props.repo.language}</b>
              </div>
              <div className="pure-u-1-3 watchers-count">
                <b>{this.props.repo.watchers}</b>
              </div>
              <div className="pure-u-1-3">
                <b>{this.props.repo.forks}</b>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
});
