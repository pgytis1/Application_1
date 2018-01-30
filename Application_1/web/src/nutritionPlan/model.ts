import { RootState } from '../store';
import { Day } from '../model';

// Model

export interface State {
    error: string | null;
    days: Day[];
}

// Action types

export const INIT_START = 'nutritionPlan/INIT_START';
export const INIT_SUCCESS = 'nutritionPlan/INIT_SUCCESS';
export const INIT_FAILURE = 'nutritionPlan/INIT_FAILURE';
export const ADD_DAY = 'nutritionPlan/ADD_DAY';
export const CREATE_MEALS = 'nutritionPlan/CREATE_MEALS';

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

export interface AddDayAction {
    type: typeof ADD_DAY;
}

export interface CreateMealsAction {
    type: typeof CREATE_MEALS;
}

export type ActionTypes =
    InitStartAction | InitSuccessAction | InitFailureAction |
    AddDayAction | CreateMealsAction;

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
    addDay: (): AddDayAction => ({
        type: ADD_DAY
    }),
    createMealsAction: (): CreateMealsAction => ({
        type: CREATE_MEALS
    })
};

// Selectors

export const selectors = {
    getOwn: (state: RootState) => state.nutritionPlan
};