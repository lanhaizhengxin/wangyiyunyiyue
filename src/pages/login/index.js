import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import "./style.scss"

class Login extends Component{
  render() {
    return (
      <div className="login-container">
          <div className="box">
            <div className="logo">
                <img src="" alt=""/>
            </div>
            <Button>手机号登录</Button>
            <Button type="warning">立即体验</Button>
            <div>

            </div>
          </div>
      </div>
    )
  }
}

export default Login;
