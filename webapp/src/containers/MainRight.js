import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
  return {

  };
}

class MainRight extends Component {
  render() {
    return (
      <div className="main-right">
        MainRight
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
)(MainRight));