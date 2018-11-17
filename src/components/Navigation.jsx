import React, { Component } from 'react';
import LoggedInUser from './LoggedInUser';
import ToDoListContainer from '../containers/ToDoListContainer';
import NewListCreator from './NewListCreator';

export default class Navigation extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <LoggedInUser />
                <ToDoListContainer />
                <NewListCreator />
            </div>
        )
    }
}