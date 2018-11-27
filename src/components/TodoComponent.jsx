import React, { Component } from 'react';

export default class TodoComponent extends Component {

    render() {
        return (
            <div className='todo' onClick={this.props.todoClicked}>{this.props.children}</div>
        );
    }
}