import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changInputAction, addListAction, deleteListAction, getListData } from './store/action';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { inputValue, list, handleInputChange, handleAdd } = this.props;
    return (
      <Fragment>
        <div>
          <input className="input" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleAdd}>提交</button>
        </div>
        <ul>{this.getTodoItem(list)}</ul>
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.initData();
  }

  getTodoItem(list) {
    return list.map((item, index) => {
      return (
        <TodoItem key={index} content={item} index={index} deleteItem={this.props.handleDelete} />
      );
    });
  }
}

// store的数据映射到组件的props
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

// 在组件的props方法中dispatch
const mapDispatchToProps = dispatch => {
  return {
    initData() {
      const action = getListData();
      dispatch(action);
    },
    handleInputChange(e) {
      const action = changInputAction(e.target.value);
      dispatch(action);
    },
    handleAdd() {
      const action = addListAction();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteListAction(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
