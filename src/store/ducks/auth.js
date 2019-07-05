import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signOut: null,
  signUpRequest: ['name', 'email', 'password'],
  getUserSuccess: ['user'],
  getPermissionsSuccess: ['roles', 'permissions'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Challenge:token'),
  token: localStorage.getItem('@Challenge:token') || null,
  user: null,
  roles: [],
  permissions: [],
});

/* Reducers */

export const success = (state, { token }) => state.merge({ signedIn: true, token });

export const logout = state => state.merge({
  signedIn: false, token: null, roles: [], permissions: [], user: null,
});
/* Reducers to types */

export const userSuccess = (state, { user }) => state.merge({ user });

export const permissionsSuccess = (state, { roles, permissions }) => state.merge({ roles, permissions });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.GET_USER_SUCCESS]: userSuccess,
  [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
});
