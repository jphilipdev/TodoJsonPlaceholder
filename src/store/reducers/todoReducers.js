import { TODOS_UPDATED, ADD_TODO } from '../actions/types';

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
            
            const maxTodoId = Math.max(...todos.map(todos => todos.id));
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
        default:
            return state;
    }
}