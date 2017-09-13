import React from 'react'
import axios from 'axios'

class Login extends React.Component {
	constructor(props) {
	    super(props);
	}
	handleSubmit(event) {
		const data = {
			username: this.loginEmail.value,
			password: this.loginPassword.value
		}
		axios.post('/api/authenticate',data).then(function(response){
			console.log(response);
			// this.history.pushState();
		}).catch(function(error){
			console.log(error);
		})
		event.preventDefault();
	}
	render() {
		return (
				<div className='login-field col-5'>
						<div className='icon2x'></div>
						<h1>"Cut Air"</h1>
						<p>Đăng nhập để bắt đầu trò chuyện.</p>
						<form onSubmit={this.handleSubmit}>
							<input type='email' ref={(input) => {this.loginEmail = input;}} name='email' placeholder='Email' required/>
							<input type='password' ref={(input) => {this.loginPassword = input;}} name='password' placeholder='Password' required/>
							<button type='submit'>Đăng nhập</button>
							<div className='remember-me'>
							    <input type="checkbox" id="remember-me" />
							    <label>Duy trì đăng nhập</label>
						  	</div>
						  	<div className='download'>Tải ứng dụng trên  
						  		<a href='#'>iOS,</a>
						  		<a href='#'>Android</a>
						  	</div>
						</form>
				</div>
		);
	}
}

export default Login;