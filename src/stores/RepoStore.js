'use strict';

import alt from '../utils/alt';
import RepoActions from '../actions/RepoActions';

class RepoStore {
  constructor() {
    this.repos = [];
    this.bindAction(RepoActions.fetchSuccess, this.onFetchReposSuccess)
  }
  onFetchReposSuccess(data) {
    this.repos = data;
  }
}

export default alt.createStore(RepoStore);
