import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <Provider>
        <Layout />
      </Provider>
    )
  }
}

export default App;
