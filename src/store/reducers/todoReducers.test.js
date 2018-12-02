import todoReducer from './todoReducers';
import { ADD_TODO } from '../actions/types';

describe('todoReducers', () => {
    it('should add item to empty list', () => {
        const initialState = {
            todos: [],
            todo: {}
        };

        const action = {
            type: ADD_TODO,
            payload: 'title'
        }

        const expectedTodo = {
            userId: 2,
            id: 1,
            title: action.payload,
            completed: true
        };

        const state = todoReducer(initialState, action);

        expect(state.todo).toEqual(expectedTodo);
        expect(state.todos).toEqual([expectedTodo]);
    });

    it('should add another item to non-empty list and increment ID', () => {
        const initialState = {
            todos: [{ id: 1 }],
            todo: {}
        };

        const action = {
            type: ADD_TODO,
            payload: 'title'
        }

        const expectedTodo = {
            userId: 2,
            id: 2,
            title: action.payload,
            completed: true
        };

        const state = todoReducer(initialState, action);

        expect(state.todo).toEqual(expectedTodo);
        expect(state.todos).toEqual([...initialState.todos, expectedTodo]);
    });
});