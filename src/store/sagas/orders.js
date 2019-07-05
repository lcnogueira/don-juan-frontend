import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import api from 'services/api';
import OrdersActions from 'store/ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrdersActions.loadOrdersSuccess(response.data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Orders not loaded',
        message: 'Error when trying to load orders',
      }),
    );
  }
}
