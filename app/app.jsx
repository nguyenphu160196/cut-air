import React from 'react';

class App extends React.Component {
	navbarScroll(){

	}
	render() {
		return (
			<div>
			    <div className="nav-bar col-12">
					<ul>
						<li><a className="active">Sign Up</a></li>
						<li><a href="#">Feature</a></li>
						<li><a className='mess' href="#">CutTheWind</a></li>
						<li><a className='mess-icon' href="#"></a></li>
					</ul>		
				</div>
				<div className='page-1 col-12'>
					<div className='login-field col-5'>
					<div className='icon2x'></div>
					<h1>Cut the wind</h1>
					<p>Đăng nhập để bắt đầu chém gió.</p>
					<form>
						<input type='email' name='email' placeholder='Email hoặc số điện thoại'/>
						<input type='password' name='passwork' placeholder='Passwork'/>
						<button type='submit'>Đăng nhập</button>
						<div className='remember-me'>
						    <input type="checkbox" id="remember-me" />
						    <label for="remember-me">Duy trì đăng nhập</label>
					  	</div>
					  	<div className='download'>Tải ứng dụng trên  
					  		<a href='#'>iOS,</a>
					  		<a href='#'>Android</a>
					  	</div>
					</form>
					</div>
					<div className='devices-img col-7'></div>
				</div>
			</div>
		);
	}
}

export default App;