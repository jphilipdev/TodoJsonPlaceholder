import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ToDoManager from './ToDoManager';
import Footer from './Footer';

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftNavigation = styled(Navigation)`
    min-width: 300px;
`;

export default class Layout extends Component {

    render() {
        return (
            <LayoutWrapper>
                <ContentWrapper>
                    <LeftNavigation className="test"/>
                    <ToDoManager/>
                </ContentWrapper>
                <Footer />
            </LayoutWrapper>
        )
    }
}