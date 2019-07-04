import { all, takeLatest } from 'redux-saga/effects';

import { OrdersTypes } from 'store/ducks/orders';
import {
  signIn, signOut, signUp, // getPermissions,
} from './auth';
import { AuthTypes } from '../ducks/auth';

import { loadOrders } from './orders';

export default function* rootSaga() {
  yield all([
    // fork(getPermissions),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(OrdersTypes.LOAD_ORDERS_REQUEST, loadOrders),
  ]);
}
