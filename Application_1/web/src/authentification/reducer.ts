import * as m from './model';

const initialState: m.State = {
    userName: null,
    error: null
};

export const reducer = (state: m.State = initialState, action: m.ActionTypes): m.State => {
    switch (action.type) {
        case m.LOGIN_SUCESS:
            return {
                ...state,
                userName: action.payload.userName
            };
        case m.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
};