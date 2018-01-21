import * as m from './model';

const initialState: m.State = {
    error: null
};

export const reducer = (state: m.State = initialState, action: m.ActionTypes): m.State => {
    switch (action.type) {
        default:
            return state;
    }
};