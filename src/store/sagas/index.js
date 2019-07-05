import { all, fork, takeLatest } from 'redux-saga/effects';

import { OrdersTypes } from 'store/ducks/orders';
import {
  signIn, signOut, signUp, getUser, // getPermissions,
} from './auth';
import { AuthTypes } from '../ducks/auth';

import { loadOrders } from './orders';

export default function* rootSaga() {
  yield all([
    // fork(getPermissions),
    fork(getUser),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(AuthTypes.SIGN_IN_SUCCESS, getUser),

    takeLatest(OrdersTypes.LOAD_ORDERS_REQUEST, loadOrders),
  ]);
}
