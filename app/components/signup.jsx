import React from 'react';

class Signup extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.state={style: 'none'}
	}
	handleSubmit(){
		this.props.dispatch({type: 'signUp_click'})
	}
	render() {
		return (
				<div className='sign-up col-12' style={{display: this.state.style}}>
					<div className='signup-popup col-4'>
						<div className='signup-label'>
							<label>Sign Up</label>
						</div>
						<form onSubmit={this.handleSubmit}>
							<input type='text' name='username' placeholder='Username' required/>
							<input type='email' name='email' placeholder='Email' required/>
							<input type='password' name='password' placeholder='Password' required/>
							<input type='password' name='re-password' placeholder='Re-Password' required/>
							<div className='btn_form'>
								<input type='submit' className='signup-submit' value='Sign Up'/>
								<input type='button' className='signup-cancel' value='Cancel'/>
							</div>
						</form>
					</div>
				</div>
		);
	}
}

export default Signup;