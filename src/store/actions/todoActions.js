import { TODOS_UDPATED } from './types';

export const updateTodos = todos => dispatch => {
    dispatch({
        type: TODOS_UDPATED,
        payload: todos
    });
}