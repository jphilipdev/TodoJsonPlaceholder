import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import TodoManagerContainer from '../containers/TodoManagerContainer';
import Footer from './Footer';
import { baseline } from '../styles/constants';

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${baseline(1)};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftNavigation = styled(Navigation)`
    min-width: ${baseline(20)};
    margin: ${baseline(1)};
`;

export default class Layout extends Component {

    render() {
        return (
            <LayoutWrapper>
                <ContentWrapper>
                    <LeftNavigation />
                    <TodoManagerContainer />
                </ContentWrapper>
                <Footer />
            </LayoutWrapper>
        );
    }
}