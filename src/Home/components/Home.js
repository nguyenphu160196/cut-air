import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {closeDialog, signOut, accSetting} from '../modules/home.js'

import ListFriend from './FriendsList.js'
import OwnAccount from './OwnAccount.js'

const friend = [{name: 'Brendan Lim', avatar: ''}, {name: 'Eric Hoffman', avatar: ''}, {name: 'Grace NgGrace NgGrace NgGrace Ng', avatar: ''}, {name: 'Kerem Suer', avatar: ''}];
const message = [{user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}, {user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}, {user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}]

export const Home = ({home, closeDialog, signOut, accSetting}) => {	
	if(!localStorage['access_token']){
		location.href = '/';
	}else{
		return (
			<div>	
				<div className='home-container'>
					<div className='chat-control'>
						<div className='own-account'>
							<OwnAccount
								closeDialog={closeDialog}
								accSetting={accSetting}
								acc_set={home.acc_set}
								signOut={signOut}
							/>
						</div>
						<div className='friends-list'>
							<ListFriend array={friend} />
						</div>
					</div>
					<div className='chat-class'>
						<div className='videocall-field'></div>
						<div className='chat-main'>
							<div className='chat-field'>
								<div className='chat-content'></div>
								<div className='chat-input'></div>
							</div>
							<div className='chat-preferences'>
								<div className='own-account-setting'></div>
								<div className='search-friend'></div>
							</div>
						</div>
					</div>		
				</div>
			</div>
		);	
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({closeDialog, signOut, accSetting}, dispatch);
}

const mapStatetoProps = (state)=>{
	return {home: state.HomeReducer}
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);

Home.PropTypes = {
	home: PropTypes.object.isRequired,
	closeDialog: PropTypes.func.isRequired,
	signOut: PropTypes.func.isRequired,
	accSetting: PropTypes.func.isRequired
}
