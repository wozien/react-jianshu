import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import { GlobalStyle } from './style';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
