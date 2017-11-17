import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {closeDialog} from '../modules/home.js'

const friend = [{name: 'a', avatar: ''}, {name: 'a', avatar: ''}, {name: 'a', avatar: ''}, {name: 'a', avatar: ''}];
const account = {name: 'b', avatar: ''};
const message = [{user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}, {user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}, {user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}]

export const Home = ({main, closeDialog}) => {	
	if(!localStorage['access_token']){
		location.href = '/';
	}else{
		return (
			<div>	
				<div className='home-container'>
					<div className='chat-control'>
						<div className='own-account'>own-account</div>
						<div className='friends-list'>friends-list</div>
					</div>
					<div className='chat-class'>
						<div className='videocall-field'>videocall-field</div>
						<div className='chat-main'>
							<div className='chat-field'>
								<div className='chat-content'>chat-content</div>
								<div className='chat-input'>chat-input</div>
							</div>
							<div className='chat-preferences'>
								<div className='own-account-setting'>own-account-setting</div>
								<div className='search-friend'>search-friend</div>
							</div>
						</div>
					</div>		
				</div>
			</div>
		);	
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({closeDialog}, dispatch);
}

const mapStatetoProps = (state)=>{
	return {home: state.HomeReducer}
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);

Home.PropTypes = {
	home: PropTypes.object.isRequired,
	closeDialog: PropTypes.func.isRequired
}
