'use strict';

import alt from '../utils/alt'
import axios from 'axios'

class ContribActions {
  fetchContribs(username, repo) {
    axios
    .get(`https://api.github.com/repos/${username}/${repo}/contributors?page=1&per_page=100`)
    .then((res) => {
      this.actions.fetchContribSuccess(res.data)
    })
  }
  fetchContribSuccess(contribs) {
    this.dispatch(contribs)
  }
}

export default alt.createActions(ContribActions)
