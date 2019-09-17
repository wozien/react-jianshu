import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 如果传入的content没变化，不执行render
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired
};

TodoItem.defafultProps = {
  content: 'wozien'
};

export default TodoItem;
