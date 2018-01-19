// import { RootState } from '../store';

// Model

export interface State {
    error: string | null;
}

// Action types

export const INIT_START = 'programos/prevencines/selected/INIT_START';
export const INIT_SUCCESS = 'programos/prevencines/selected/INIT_SUCCESS';
export const INIT_FAILURE = 'programos/prevencines/selected/INIT_FAILURE';

// Actions

export interface InitStartAction {
    type: typeof INIT_START;
    payload: number;
}
export interface InitSuccessAction {
    type: typeof INIT_SUCCESS;
}
export interface InitFailureAction {
    type: typeof INIT_FAILURE;
    payload: Error;
}

export type ActionTypes = InitStartAction | InitSuccessAction | InitFailureAction;

// Action creators

export const actions = {
    init: (id: number): InitStartAction => ({
        type: INIT_START,
        payload: id
    }),
    initSuccess: (): InitSuccessAction => ({
        type: INIT_SUCCESS
    }),
    initFailure: (error: Error): InitFailureAction => ({
        type: INIT_FAILURE,
        payload: error
    }),
};

// Selectors

// export const selectors = {
//     getOwn: (state: RootState) => state.auth
// };