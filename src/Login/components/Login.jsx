import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './login.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state={display:'none', dialog:false, message:''}
	}

	handleClose = () => {
		this.setState({dialog: false});
	};

	handleSubmit(event) {
		event.preventDefault();
		var data_login = {
			email: this.loginEmail.value,
			password: this.loginPassword.value
		}
		axios.post('/api/authenticate',data_login)
		.then(function (response) {
			var res = response.data;
			if(res.success == true){
				localStorage.setItem("access_token", res.token);
				localStorage.user = JSON.stringify(res.user);
				location.href = '/home';
			}else{
				this.setState({dialog:true, message: 'The email or password is incorrect!'});
			}
		})
		.catch(function (error){
		})
	}

	render() {
		const actions = [
			<FlatButton
			  label="OK"
			  primary={true}
			  onClick={this.handleClose}
			/>
		];
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
				<Dialog
					actions={actions}
					modal={false}
					open={this.state.dialog}
					onRequestClose={this.handleClose}
				>
					{this.state.message}
				</Dialog>
			</div>
		);
	}
}

export default Login;