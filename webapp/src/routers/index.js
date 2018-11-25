import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Layouts from '../containers/Layouts'


class Routers extends Component {

    render() {
        return (
            <Switch>
              <Route  path='/' component={Layouts}/>
            </Switch>
        )
    }
}

export default withRouter(Routers)