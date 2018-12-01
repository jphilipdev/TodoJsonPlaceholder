import todoReducer from './todoReducers';
import { ADD_TODO } from '../actions/types';

describe('todoReducers', () => {
    it('should add new item to list with incremented ID', () => {
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
    });
});