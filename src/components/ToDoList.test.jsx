import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from './ToDoList';
import ToDoComponent from './TodoComponent';

const loadTodos = jest.fn();
const todoSelected = jest.fn();

const setup = (propsOverrides) => {

    const props = {
        loadTodos: () => {},
        todoSelected: () => {},
        todos: [],
        todo: {},
        ...propsOverrides
    };

    const wrapper = shallow(<ToDoList {...props} />);

    return {
        props,
        wrapper
    }
};

describe('ToDoList', () => {
    it('should call loadTodos when mounted', () => {
        setup({ loadTodos });
        expect(loadTodos).toHaveBeenCalled();
    });

    it('should call todoSelected when clicked', () => {
        const todo = {id: 'a'};
        const { wrapper } = setup({ todoSelected, todos: [todo] });

        wrapper.find(ToDoComponent).dive().find('.todo').simulate('click');
        
        expect(todoSelected).toHaveBeenCalled();
        expect(todoSelected.mock.calls[0][0]).toBe(todo);
    });
});
