import React, { Component } from 'react';
import Header from './Header';

export default class ToDoManager extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>{this.props.todo.title}</div>
            </div>)
    }
}