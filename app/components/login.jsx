import React from 'react'
import axios from 'axios'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		const data_login = {
			email: this.loginEmail.value,
			password: this.loginPassword.value
		}
		axios.post('/api/authenticate',data_login).then(function (response) {
			console.log(response);
			
		})
		.catch(function (error) {
			console.log(error);
		});
		event.preventDefault();
	}
	render() {
		return (
			<div className='login-field col-5'>
					<div className='icon2x'></div>
					<h1>"Cut Air"</h1>
					<p>Đăng nhập để bắt đầu.</p>
					<form onSubmit={this.handleSubmit}>
						<input type='email' ref={(input) => {this.loginEmail = input;}} name='email' placeholder='Email' required/>
						<input type='password' ref={(input) => {this.loginPassword = input;}} name='password' placeholder='Password' required/>
						<button type='submit'>Đăng nhập</button>
						<div className='remember-me'>
							<input type="checkbox" id="remember-me" />
							<label>Duy trì đăng nhập</label>
						</div>
					</form>
					<div className='download'>Tải ứng dụng trên  
						<a href='#'>iOS,</a>
						<a href='#'>Android</a>
					</div>
			</div>
		);
	}
}

export default Login;