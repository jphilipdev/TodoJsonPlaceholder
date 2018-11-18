import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToDoList extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        loadTodos: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.loadTodos();
    }

    render() {
        return (
            <div>
                {this.props.todos.slice(0, 5).map(todo => (
                        <div key={todo.id}>{todo.title}</div>
                    )
                )}
            </div>
        )
    }
}