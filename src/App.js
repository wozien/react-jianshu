import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './component/header';
import { GlobalStyle } from './style';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
