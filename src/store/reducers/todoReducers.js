import { TODOS_UPDATED, ADD_TODO, TODO_SELECTED } from '../actions/types';

const initialState = {
    todos: [],
    todo: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TODOS_UPDATED:
            return {
                ...state,
                todos: action.payload.slice(0, 5)
            };
        case ADD_TODO:

            const todos = [...state.todos];
            
            const maxTodoId = todos.length == 0 ? 0 : Math.max(...todos.map(todos => todos.id));
            const todo = {
                userId: 2,
                id: maxTodoId + 1,
                title: action.payload,
                completed: true
            };

            todos.push(todo);

            return {
                ...state,
                todos,
                todo
            }
        case TODO_SELECTED:
            return {
                ...state,
                todo: action.payload
            };
        default:
            return state;
    }
}