'use strict';

import React from 'react'
import { RouteHandler } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});
