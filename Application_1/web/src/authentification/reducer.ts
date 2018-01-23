import * as m from './model';

const initialState: m.State = {
    id: null,
    userName: null,
    error: null
};

export const reducer = (state: m.State = initialState, action: m.ActionTypes): m.State => {
    switch (action.type) {
        case m.LOGIN_SUCESS:
            return {
                ...state,
                id: action.payload.id,
                userName: action.payload.userName,
                error: null
            };
        case m.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                userName: null,
                id: null
            };
        default:
            return state;
    }
};