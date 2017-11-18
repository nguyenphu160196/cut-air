import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import DialogMessage from '../../common/DialogMessage.js'

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.props.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.handleScroll);
	}
	
	render() {
		return (
			<div className='login-field col-5'>
				<div className='icon2x'></div>
				<h1>"Cut Air"</h1>
				<p>Đăng nhập để bắt đầu.</p>
				<form onSubmit={(event)=>{
					event.preventDefault();
					this.props.handleLogin({email: this.email.value, password: this.password.value})
				}}>
					<input type='email' ref={(input) => {this.email = input;}} name='email' placeholder='Email' required/>
					<input type='password' ref={(input) => {this.password = input;}} name='password' placeholder='Password' required/>
					<button type='submit'>Đăng nhập</button>
					<div className='remember-me'>
						<input type="checkbox" id="remember-me" />
						<label>Duy trì đăng nhập</label>
					</div>
				</form>
				<DialogMessage dialog={this.props.dialog} message={this.props.message} closeDialog={this.props.closeDialog}></DialogMessage>
			</div>
		);
	}
}

export default Login;