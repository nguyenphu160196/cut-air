import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import Main from './Main/components/Main.js';
import Home from './Home/components/Home.jsx'
import Feature from './Feature/components/Feature.jsx'
import MainReducer from './Main/modules/main.js'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const combine = combineReducers({
	MainReducer
})

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    	<div>
	      <Route exact path="/" component={Main}/>
	      <Route path="/home" component={Home} />
        <Route path="/feature" component={Feature} />
	    </div>
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