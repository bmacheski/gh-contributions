'use strict';

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <li>
        <img className="contrib-avatar" src={this.props.contrib.avatar_url} />
      </li>
    )
  }
});
