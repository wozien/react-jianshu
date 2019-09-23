import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
  render() {
    const { loginStatus, login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={account => {
                this.account = account;
              }}
            ></Input>
            <Input
              placeholder="密码"
              type="password"
              ref={pass => {
                this.pass = pass;
              }}
            ></Input>
            <Button onClick={() => login(this.account, this.pass)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatch = dispatch => ({
  login(accountEle, passEle) {
    dispatch(actionCreators.login(accountEle.value, passEle.value));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Login);
