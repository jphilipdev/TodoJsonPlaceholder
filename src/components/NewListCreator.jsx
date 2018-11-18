import React, { Component } from 'react';

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

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
    };

    render() {
        const { title } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='title' value={title} onChange={this.onChange} />
                    <button type='submit'>Go</button>
                </form>
            </div>
        );
    }
}