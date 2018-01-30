import * as m from './model';
import { enums } from '../model';

const initialState: m.State = {
    error: null,
    days: [{
        id: 0,
        name: enums.Days.datasource()[0].name,
        meals: []
    }]
};

export const reducer = (state: m.State = initialState, action: m.ActionTypes): m.State => {
    switch (action.type) {
        case m.ADD_DAY:
            return {
                ...state,
                days: [...state.days, {
                    id: 0,
                    name: enums.Days.datasource()[state.days.length].name,
                    meals: []
                }],
            };
        default:
            return state;
    }
};