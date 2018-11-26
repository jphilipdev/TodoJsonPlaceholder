import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDoList from './ToDoList';

configure({ adapter: new Adapter() });

const loadTodos = jest.fn();

const defaultProps = (propsOverrides) => {
    return {
        loadTodos: null,
        todos: [],
        ...propsOverrides
    }
};

describe('ToDoList', () => {
    it('should call loadTodos when mounted', () => {
        const props = defaultProps({ loadTodos });
        const component = shallow(<ToDoList {...props} />);

        expect(loadTodos).toHaveBeenCalled();
    })
});
