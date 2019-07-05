import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from 'services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@Challenge:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Login failed',
        message: 'Wrong email/password',
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@Challenge:token');

  yield put(push('/signin'));
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });

    localStorage.setItem('@Challenge:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Sign up failed',
        message: 'Have you been invited for any team?',
      }),
    );
  }
}

export function* getUser() {
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn) return;

  try {
    const response = yield call(api.get, 'users');

    yield put(AuthActions.getUserSuccess(response.data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'User data not loaded',
        message: 'Error when trying to load user data',
      }),
    );
  }
}

export function* getPermissions() {
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn) return;

  try {
    const response = yield call(api.get, 'permissions');

    const { roles, permissions } = response.data;
    yield put(AuthActions.getPermissionsSuccess(roles, permissions));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Permissions not loaded',
        message: 'Error when trying to load permissions',
      }),
    );
  }
}
