import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './Main/components/Main.js';
import Home from './Home/components/Home.js'
import Feature from './Feature/components/Feature.jsx'
import MainReducer from './Main/modules/main.js'
import HomeReducer from './Home/modules/home.js'
import NotFound from './common/NotFound.js'

const combine = combineReducers({
	MainReducer,
  HomeReducer
})

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/feature" component={Feature}></Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </Provider>
)

export const Index = ({store}) => (
  <MuiThemeProvider>
    <Root store={store}/>
  </MuiThemeProvider>
)

let store = createStore(
  combine,
  applyMiddleware(thunk)
);

ReactDOM.render(
		<Index store={store}/>,
	document.getElementById('root')
);