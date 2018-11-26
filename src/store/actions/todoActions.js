import axios from 'axios';
import { TODOS_UPDATED, ADD_TODO, TODO_SELECTED } from './types';


export const loadTodos = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            dispatch({
                type: TODOS_UPDATED,
                payload: response.data
            });
        });
}

export const addTodo = (title) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: title
    });
}

export const todoSelected = (todo) => dispatch => {
    return dispatch({
        type: TODO_SELECTED,
        payload: todo
    });
}