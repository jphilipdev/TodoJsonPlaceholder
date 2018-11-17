import React, { Component } from 'react';
import LoggedInUser from './LoggedInUser';
import ToDoList from './ToDoList';
import NewListCreator from './NewListCreator';

export default class Navigation extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <LoggedInUser />
                <ToDoList />
                <NewListCreator />
            </div>
        )
    }
}