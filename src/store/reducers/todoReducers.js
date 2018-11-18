import { TODOS_UPDATED } from '../actions/types';

const initialState = {
    todos: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case TODOS_UPDATED:
            return {
                ...state, 
                todos: action.payload
            };
        default:
            return state;
    }
}