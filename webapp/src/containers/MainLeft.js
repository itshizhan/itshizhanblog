import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route,Switch,withRouter } from 'react-router-dom';

const Login = ()=>(
  <div>Login</div>
)

const Home = ()=>(
  <div>Home</div>
)


function mapStateToProps(state) {
  return {

  };
}



class MainLeft extends Component {
  render() {
    return (
      <div className="main-left">
       <Switch>
         <Route path="/"  exact component={Home}/>
         <Route path="/login"  exact component={Login}/>
       </Switch>   
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
)(MainLeft));