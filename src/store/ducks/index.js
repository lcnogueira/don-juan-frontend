import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';

const reducers = history => combineReducers({
  auth,
  toastr,
  router: connectRouter(history),
});

export default reducers;
