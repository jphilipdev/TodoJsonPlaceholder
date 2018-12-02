import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { baseline } from '../styles/constants';

const UserIcon = styled(FontAwesomeIcon)`
    margin-right: ${baseline(0.5)}
`;

const UserName = styled.span`
    font-size: ${baseline(2.5)};
`;

export default class LoggedInUser extends Component {

    render() {
        return (
            <div>
                <UserIcon icon='stroopwafel' />
                <UserName>LoggedInUser</UserName>
            </div>
        );
    }
}