'use strict';

import alt from '../utils/alt'
import axios from 'axios'

class RepoActions {
  fetchRepos(username) {
    axios
    .get(`https://api.github.com/users/${username}/repos?page=1&per_page=100`)
    .then((res) => {
      this.actions.fetchSuccess(res.data);
    })
  }
  fetchSuccess(repos) {
    this.dispatch(repos)
  }
}

export default alt.createActions(RepoActions)
