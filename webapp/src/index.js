import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routers from './routers'
import store from './store/index'
import './assets/app.scss'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))