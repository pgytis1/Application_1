import { RootState } from '../store';

// Model
export interface State {
    id: string | null;
    userName: string | null;
    error: string | null;
}

// Action types

export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCESS = 'auth/LOGIN_SUCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// Actions

export interface LoginAction {
    type: typeof LOGIN;
    payload: { userName: string, password: string };
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCESS;
    payload: { id: string, userName: string };
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: { error: string };
}

export type ActionTypes = LoginAction | LoginSuccessAction | LoginFailureAction;

// Actions creators

export const actions = {
    login: (userName: string, password: string): LoginAction => ({
        type: LOGIN,
        payload: { userName, password }
    }),
    loginSuccess: (id: string, userName: string): LoginSuccessAction => ({
        type: LOGIN_SUCESS,
        payload: { id, userName }
    }),
    loginFailure: (error: string): LoginFailureAction => ({
        type: LOGIN_FAILURE,
        payload: { error }
    }),
};

// Selectors

export const selectors = {
    getOwn: (state: RootState) => state.auth
};