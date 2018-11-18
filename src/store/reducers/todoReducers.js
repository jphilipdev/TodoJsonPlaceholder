import { TODOS_UPDATED, ADD_TODO } from '../actions/types';

const initialState = {
    todos: [],
    title: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TODOS_UPDATED:
            return {
                ...state,
                todos: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
}