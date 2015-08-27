'use strict';

import React from 'react';
import Main from '../components/Main';
import RepoSearch from '../components/RepoSearch';
import RepoList from '../components/RepoList';
import ContribList from '../components/ContribList'
import { Router, DefaultRoute, Route } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="reporesults" path="search/:username" handler={RepoList} />
    <Route name="contribresults" path="contrib/:username/:repo" handler={ContribList} />
    <DefaultRoute handler={RepoSearch} />
  </Route>
);
