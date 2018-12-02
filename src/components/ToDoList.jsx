import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TodoComponent from './TodoComponent';

const TodoComponentList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

export default class ToDoList extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        todo: PropTypes.object.isRequired,
        loadTodos: PropTypes.func.isRequired,
        todoSelected: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.loadTodos();
    }

    todoClicked = (todoId) => {
        const todo = this.props.todos.filter(todo => todo.id === todoId)[0];
        this.props.todoSelected(todo);
    }

    render() {
        return (
            <TodoComponentList>
                {this.props.todos.map(todo => (
                    <TodoComponent
                        key={todo.id}
                        todoClicked={this.todoClicked.bind(this, todo.id)}
                        todoSelected={this.props.todo === todo}
                    >
                        {todo.title}
                    </TodoComponent>
                )
                )}
            </TodoComponentList>
        )
    }
}