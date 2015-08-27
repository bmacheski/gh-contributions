'use strict';

import alt from '../utils/alt';
import ContribActions from '../actions/ContribActions';

class ContribStore {
  constructor() {
    this.contribs = [];
    this.bindAction(ContribActions.fetchContribSuccess, this.onFetchContribSuccess)
  }
  onFetchContribSuccess(data) {
    this.contribs = data;
  }
}

export default alt.createStore(ContribStore);
