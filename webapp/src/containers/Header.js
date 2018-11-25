import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Link } from 'react-router-dom'
import './assets/common.scss'
import { headerNavMenu } from '../configs/menus.js'


function mapStateToProps(state) {
  return {

  };
}

class Header extends Component {
  render() {
    return (
      <nav className="header-nav">
        <div className="header-nav-main">
          <h2 className="site-title">itshizhanBlog</h2>
          <ul className="nav-menu-ul">
            { headerNavMenu.map((item,index)=>
              (<li key={index}>
                 <Link to={item.key}> {item.title}</Link>
               </li>)
            )}
          </ul>

          <ul className="nav-menu-ul user">
            <li>
              <Link to="/register"> 注册</Link>
            </li>
            <li>
              <Link to="/login"> 登录</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
)(Header));