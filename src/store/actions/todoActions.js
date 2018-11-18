import axios from 'axios';
import { TODOS_UPDATED } from './types';


export const loadTodos = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            dispatch({
                type: TODOS_UPDATED,
                payload: response.data
            });
        });
}

// export const updateTodos = todos => dispatch => {
//     dispatch({
//         type: TODOS_UPDATED,
//         payload: todos
//     });
//}