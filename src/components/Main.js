'use strict';

import React from 'react'
import { RouteHandler } from 'react-router'
import '../styles/Main.css';

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
