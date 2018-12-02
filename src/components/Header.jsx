import React, { Component } from 'react';
import styled from 'styled-components';
import header from '../images/header.jpg';

const HeaderImageContainer = styled.div`
    background-image: url(${header});
    width: 300px;
    height: 200px;
`;

export default class Header extends Component {

    render() {
        return (
            <HeaderImageContainer>
            </HeaderImageContainer>
        )
    }
}