'use strict';

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <li>
        <div className="pure-g">
          <div className="pure-u-2-3">
            <h3>{this.props.repo.name}</h3>
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
