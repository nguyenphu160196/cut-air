import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import App from './app.jsx';
import signUpReducer from './reducers/reducer_signUp.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const combine = combineReducers({
	signUpReducer
})

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
)

let store = createStore(combine)

ReactDOM.render(
		<Root store={store}/>,
	document.getElementById('root')
);