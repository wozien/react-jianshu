import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component {
  render() {
    const { list, getMoreList } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link to="/detail" key={index}>
              <ListItem>
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={getMoreList}>更多文章</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'articleList'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoreList() {
      dispatch(actionCreators.getMoreList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
