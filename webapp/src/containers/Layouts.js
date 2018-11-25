import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

class Layouts extends Component {
  render() {
    return (

      <div className='Layouts_wrap clear clearFix'>
          <Header />
          <div className="layouts-main">
            <MainLeft></MainLeft>
            <MainRight></MainRight>
          </div>
          <Footer/>
      </div>

    );
  }
}

export default withRouter(Layouts);