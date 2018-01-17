import { RootState } from '../store';

// Model
export interface State {
    userName: string | null;
}

// Action types

export const LOGIN = 'auth/LOGIN';

// Actions

export type Login = {
    type: typeof LOGIN;
    payload: { userName: string, password: string }
};

export type ActionTypes = Login;

// Actions creators

export const actions = {
    login: (userName: string, password: string): Login => ({
        type: LOGIN,
        payload: { userName, password }
    })
};

// Selectors

export const selectors = {
    getOwn: (state: RootState) => state.auth
};