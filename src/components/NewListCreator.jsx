import React, { Component } from 'react';
import styled from 'styled-components';
import { baseline } from '../styles/constants';

const AddTodoContainer = styled.div`
    display: flex;
`;

const TitleInput = styled.input`
    border-radius: ${baseline(0.5)};
    margin-right: ${baseline(0.5)};
`;

const GoButton = styled.button`
    border-radius: ${baseline(0.5)};
`;

export default class NewListCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.addTodo}>
                <AddTodoContainer>
                    <TitleInput type='text' name='title' value={title} onChange={this.onChange} />
                    <GoButton type='submit' className='btn btn-primary'>Go</GoButton>
                </AddTodoContainer>
            </form>
        );
    }
}