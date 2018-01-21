import { Store } from 'redux';
// import { RouterState } from 'react-router-redux';
import { State as RecipesState, ActionTypes as RecipesActionTypes } from './recipes';
import { State as AuthState, ActionTypes as AuthActionTypes } from './authentification';

export type RootState = {
    auth: AuthState,
    recipes: RecipesState
};

export type Store = Store<RootState>;

export type ActionTypes =
    AuthActionTypes | RecipesActionTypes;

export type Dispatch = <A extends ActionTypes>(action: A) => Promise<void> | A; // TODO: returns Promise | void

export type GetState = () => RootState;

export type StoreApi = Pick<Store<RootState>, 'dispatch' | 'getState'>;
