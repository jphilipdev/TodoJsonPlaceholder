import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseline } from '../styles/constants';

const TodoComponentListItem = styled.li`
    padding: ${baseline(0.5)};
    border-radius: ${baseline(0.5)};
    background-color: ${props => props.todoSelected ? '#06f3' : '#fff'};
`;

export default class TodoComponent extends Component {

    static propTypes = {
        todoSelected: PropTypes.bool.isRequired,
        todoClicked: PropTypes.func.isRequired
    };

    render() {
        const className = `todo ${this.props.todoSelected}`;
        return (
            <TodoComponentListItem
                className={className}
                onClick={this.props.todoClicked}
                todoSelected={this.props.todoSelected}
            >
                {this.props.children}
            </TodoComponentListItem>
        );
    }
}