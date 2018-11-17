import { TODOS_UPDATED } from '../actions/types';

const intialState = {
    todos: []
};

export default function (state = initialState, action) {
    switch(action) {
        case TODOS_UPDATED:
            return {
                ...state, 
                todos: action.payload
            };
        default:
            return state;
    }
}