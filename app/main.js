import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './app.jsx';
import Home from './components/home.jsx'
import signUpReducer from './reducers/reducer_signUp.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const combine = combineReducers({
	signUpReducer
})

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    	<div>
	      <Route exact path="/" component={App} />
	      <Route path="/home" component={Home} />
	    </div>
    </Router>
  </Provider>
)

const Index = ({store}) => (
  <MuiThemeProvider>
    <Root store={store}/>
  </MuiThemeProvider>
)

let store = createStore(combine)

ReactDOM.render(
		<Index store={store}/>,
	document.getElementById('root')
);