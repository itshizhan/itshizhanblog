import React, { Component } from 'react';
import wechatQrcode from './assets/wechat-qrcode.png';
import { withRouter } from 'react-router-dom'


class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="footer-content">
          <div style={{height:'140px'}}>
            <div className="wechat-qrcode">
              <img src={wechatQrcode} style={{width:'110px'}} alt="我的二维码"></img>
            </div>
            <div className="contact-us">
              <h3>联系我们</h3>
              <p className="mt20"></p>
              <p>Email: itshizhan@163.com</p>
              <p>QQ:    370424110</p>
              <p><a href="https://github.com/itshizhan" target="blank">Github: https://github.com/itshizhan</a></p>
            </div>
            <div className="site-description">
              <h3>关于itshizhanblog</h3>
              <p className="mt20">
              这是我的个人博客、会分享关于编程、写作、思考相关的任何内容，<br/> 希望可以给来到这儿的人有所帮助...
              </p>
            </div>
          </div>
          <div className="copyright">
          Copyright © 2018 - 2020 www.itshizhan.com Designed by Itshizhan
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);