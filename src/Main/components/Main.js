import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './main.css'

import Signup from '../../SignUp/components/Signup.jsx';
import Login from '../../Login/components/Login.jsx';
import {signupClick, signupCancel, closeDialog, handleLogin, handleScroll, handleSignup} from '../modules/main.js'

export const Main = ({main, signupClick, signupCancel, handleLogin, closeDialog, handleScroll, handleSignup}) => {
	if(localStorage['access_token']){
		location.href = '/home'
	} else {
		return (
			<div>
				<Signup 
					display={main.display}
					onCancel={signupCancel}
					handleSignup={handleSignup}
				></Signup>
				<div className="nav-bar col-12">
					<ul>
						<li><a className="active" onClick={signupClick}>Sign Up</a></li>
						<li><a href='/feature' target='_blank'>Feature</a></li>
						<li><a className='mess' style={{display: main.icon}} href="#">"Cut Air"</a></li>
						<li><a className='mess-icon' style={{display: main.icon}} href="#"></a></li>
					</ul>
				</div>
				<div className='page-1 col-12'>
					<Login 
						closeDialog={closeDialog} 
						handleLogin={handleLogin}
						message={main.message}
						dialog={main.dialog}
						handleScroll={handleScroll}
						block={main.block}
					></Login>
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
			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({signupClick, signupCancel, closeDialog, handleLogin, handleScroll, handleSignup}, dispatch);
}

const mapStatetoProps = (state)=>{
	return {main: state.MainReducer}
}

export default connect(mapStatetoProps, mapDispatchToProps)(Main);

Main.PropTypes = {
	main: PropTypes.object.isRequired,
	signupClick: PropTypes.func.isRequired,
	signupCancel: PropTypes.func.isRequired,
	closeDialog: PropTypes.func.isRequired,
	handleLogin: PropTypes.func.isRequired,
	handleScroll: PropTypes.func.isRequired,
	handleSignup: PropTypes.func.isRequired
}