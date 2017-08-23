import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import App from './app.jsx';
import signUpReducer from './reducers/reducer_signUp.js'
import Main from './page-main.jsx'

const combine = combineReducers({
	signUpReducer
})
let store = createStore(combine)

ReactDOM.render(
	<Provider store = {store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);