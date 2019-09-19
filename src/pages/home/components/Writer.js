import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterTitle, WriterItem, WriterInfo } from '../style';

class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <div className="switch">
            <i className="iconfont"> &#xe851;</i>
            换一批
          </div>
        </WriterTitle>
        {list.map(item => {
          return (
            <WriterItem key={item.get('id')}>
              <img className="avatar" alt="" src={item.get('avatar')} />
              <WriterInfo>
                <h3 className="name">
                  {item.get('name')}
                  <span className="pick">+关注</span>
                </h3>
                <p className="like">{`写了${item.get('letters')}k字 · ${item.get('like')}k喜欢`}</p>
              </WriterInfo>
            </WriterItem>
          );
        })}
      </WriterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'writerList'])
  };
};

export default connect(
  mapStateToProps,
  null
)(Writer);
