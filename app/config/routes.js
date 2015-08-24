'use strict';

import React from 'react';
import Main from '../components/Main';
import RepoSearch from '../components/RepoSearch';
import RepoList from '../components/RepoList';
import { Router, DefaultRoute, Route } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="reporesults" path="search/:username" handler={RepoList} />
    <DefaultRoute handler={RepoSearch} />
  </Route>
);
