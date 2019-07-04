import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as orders } from './orders';

const reducers = history => combineReducers({
  auth,
  orders,
  toastr,
  router: connectRouter(history),
});

export default reducers;
