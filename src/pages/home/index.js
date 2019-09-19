import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, CodeWrapper, CodeInfo, BackTop } from './style';

class Home extends Component {
  render() {
    const { showTop } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <CodeWrapper>
            <img
              className="code"
              src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              alt=""
            />
            <CodeInfo>
              <h3 className="title">下载简书手机App</h3>
              <p className="desc">随时随地发现和创作内容</p>
            </CodeInfo>
          </CodeWrapper>
          <Writer></Writer>
        </HomeRight>
        {showTop ? <BackTop onClick={this.scrollTop}>Top</BackTop> : ''}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeShow);
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeShow);
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = state => {
  return {
    showTop: state.getIn(['home', 'showTop'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeData());
    },
    changeShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.changeShowTop(true));
      } else {
        dispatch(actionCreators.changeShowTop(false));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
