import React, { Component } from 'react';

export default class TodoComponent extends Component {

    render() {
        return (
            <div onClick={this.props.onClick}>{this.props.children}</div>
        );
    }
}