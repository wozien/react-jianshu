import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({
      list: [...this.state.list, 'item']
    });
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                key={index}
                unmountOnExit
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.toggleClick}>click</button>
      </div>
    );
  }
}

export default App;
