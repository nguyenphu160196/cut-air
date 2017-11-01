import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		var data_login = {
			email: this.loginEmail.value,
			password: this.loginPassword.value
		}
		return new Promise((resolve, reject) => {
			axios.post('/api/authenticate',data_login)
			.then(function (response){
				browserHistory.push('/home');					
			}, err => {
				console.log(err);
			})
			resolve();
		})
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

export default Home;