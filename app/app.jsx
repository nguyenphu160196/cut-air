import React from 'react';
import { connect } from 'react-redux'
import { signUpClick } from './actions/action_signUp.js'

import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import './css/page-main.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={scroll:0,mess:'none',messIcon:'none'}
		this.handleScroll = this.handleScroll.bind(this);		
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<div>
				<Signup display={this.props.signup} onCancel={()=>{
						this.props.dispatch({type: 'SIGNUP_CANCEL'});
					}
				}></Signup>
				<div className="nav-bar col-12">
					<ul>
						<li><a className="active" onClick={()=>{
							this.props.dispatch({type: 'SIGNUP_CLICK'});
							}}>Sign Up</a></li>
						<li><a href="/feature" target='_blank'>Feature</a></li>
						<li><a className='mess' style={{display:this.state.mess}} href="#">"Cut Air"</a></li>
						<li><a className='mess-icon' style={{display:this.state.messIcon}} href="#"></a></li>
					</ul>		
				</div>
				<div className='page-1 col-12'>
					<Login></Login>
					<div className='devices-img col-7'></div>
				</div>
				<div className='page-2 col-12'>
					<div className='page-2-img col-3'></div>
					<div className='page-2-txt col-3'>
						<h1>Introducing video calling in "Cut Air".</h1>
						<p>Now you can have face-to-face conversations with friends and family. It’s fast and easy to make video calls anywhere in the world.</p>
						<a className='btn_learnMore' href='#'>LERN MORE</a>
					</div>
				</div>
				<div className='page-3 col-12'>
					<h1>Texting and so much more.</h1>
					<p>Check out all you can do in Messenger.</p>
					<div className='page-3-content col-8'>
						<div className='content-child col-2'>
							<a href=''>
								<div id='Aa'></div>
								<h3>Know when people have seen your texts.</h3>
							</a>
						</div>
						<div className='content-child col-2'>
							<a href=''>
								<div id='phone_icon'></div>
								<h3>Make HD calls anywhere in the world.</h3>
							</a>
						</div>
						<div className='content-child col-2'>
							<a href=''>
								<div id='camera_icon'></div>
								<h3>Snap photos and shoot videos.</h3>
							</a>
						</div>
					</div>
					<div className='page-3-content col-8'>
						<div className='content-child col-2'>
							<a href=''>
								<div id='smile'></div>
								<h3>Choose from thousands of stickers.</h3>
							</a>
						</div>
						<div className='content-child col-2'>
							<a href=''>
								<div id='record'></div>
								<h3>Record voice messages.</h3>
							</a>
						</div>
						<div className='content-child col-2'>
							<a href=''>
								<div id='three_somes'></div>
								<h3>Chat with your favorite groups.</h3>
							</a>
						</div>
					</div>
					<a id='explore' href='#'>EXPLORE</a>
				</div>
				<div className='footer col-12'>
					<p>The Facebook, Apple, Google Play, and Windows logos are trademarks of their respective owners. View our Data Policy and Terms.</p>
				</div>
			</div>
		);
	}
	handleScroll() {
		let supportPageOffset = window.pageXOffset !== undefined;
	    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		let scroll = {
			x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		}
		this.setState({scroll: scroll});
		if(this.state.scroll.y > 0){
			this.setState({mess: 'block',messIcon: 'block'});
		}else if(this.state.scroll.y == 0){
			this.setState({mess: 'none',messIcon: 'none'});
		}
	}
}

const mapStatetoProp = (state)=>{
	return {signup: state.signUpReducer.value}
}

export default connect(mapStatetoProp)(App);