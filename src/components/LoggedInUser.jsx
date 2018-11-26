import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { baseline } from '../styles/constants';

const UserIcon = styled(FontAwesomeIcon)`
    margin-right: ${baseline(0.5)}
`;

export default class LoggedInUser extends Component {

    render() {
        return (
            <div>
                <UserIcon icon='stroopwafel' />
                <span>LoggedInUser</span>
            </div>
        );
    }
}