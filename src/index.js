/**
 * Created by chen on 2017/3/10.
 */
import React from 'react'
import {render} from 'react-dom'
import 'antd/dist/antd.css'
import {Router, Route, browserHistory} from 'react-router'

import finalCreateStore from './store/store'

import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import reducers from './reducers/reducer'
require('./style/index.css')
import {Provider} from 'react-redux'
import App from './containers/App'
import Home from './containers/Home'
import List from './containers/List'


const store = finalCreateStore(reducers)

const history = syncHistoryWithStore(browserHistory, store)

let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="/home" component={Home}>
                <Route path="/list" component={List}/>
            </Route>
        </Router>
    </Provider>,
    rootElement
);
