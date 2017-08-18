import React from 'react';

class Login extends React.Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
				<div className='login-field col-5'>
						<div className='icon2x'></div>
						<h1>"Cut Air"</h1>
						<p>Đăng nhập để bắt đầu chém gió.</p>
						<form onSubmit={this.handleSubmit}>
							<input type='email' name='email' placeholder='Email' required/>
							<input type='password' name='passwork' placeholder='Passwork' required/>
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
	handleSubmit(event) {
		alert('An essay was submitted: ');
		event.preventDefault();
	}
}

export default Login;