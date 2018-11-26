import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoComponent from './TodoComponent';

export default class ToDoList extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        loadTodos: PropTypes.func.isRequired,
        todoSelected: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.loadTodos();
    }

    onClick = (todoId) => {
        const todo = this.props.todos.filter(todo => todo.id === todoId)[0];
        this.props.todoSelected(todo);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <TodoComponent
                        key={todo.id}
                        onClick={this.onClick.bind(this, todo.id)}
                    >
                        {todo.title}
                    </TodoComponent>
                )
                )}
            </div>
        )
    }
}