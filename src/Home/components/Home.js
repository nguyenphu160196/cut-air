import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {closeDialog, signOut, accSetting} from '../modules/home.js'
import io from 'socket.io-client'
import {
    BrowserRouter as Router, Route
  } from 'react-router-dom'

import ListFriend from './FriendList.js'
import OwnAccount from './OwnAccount.js'
import VideoCallField from './VideocallField.js'
import ChatInput from './ChatInput.js'
import ChatContent from './ChatContent.js'
import Preferences from './Preferences.js'

const friend = [{id: '1',name: 'Brendan Lim', avatar: ''}, {id: '2',name: 'Eric Hoffman', avatar: ''}, {id: '3',name: 'Grace Ng', avatar: ''}, {id: '4',name: 'Kerem Suer', avatar: ''}];
const message = [{user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}, {user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}, {user: 'c', avatar: '', message: 'qwertyuiop[asdfghjklzxcvbnm'}]

export class RealTime extends React.Component{
	componentDidMount(){
		let socket = io('http://localhost:9090');
    }
	render(){
		return(
			<div>	
			<div className='home-container'>
				<div className='chat-control'>
					<div className='own-account'>
						<OwnAccount
							closeDialog={this.props.closeDialog}
							accSetting={this.props.accSetting}
							acc_set={this.props.home.acc_set}
							signOut={this.props.signOut}
						/>
					</div>
					<div className='friends-list'>
						<ListFriend array={friend} match={this.props.match}/>
					</div>
				</div>
				<div className='chat-class'>
					<div className='videocall-field'>
							<Route path={`${this.props.match.url}/:childId`} component={VideoCallField}/>
					</div>
					<div className='chat-main'>
						<div className='chat-field' style={{
							width: '77vw'
						}}>
							<div className='chat-content' style={{
							height: 'calc(100vh - 148px)'
						}}>
								<Route path={`${this.props.match.url}/:childId`} component={ChatContent}/>
							</div>
							<div className='chat-input'>
								<Route path={`${this.props.match.url}/:childId`} component={ChatInput}/>
							</div>
						</div>
						{/* <div className='chat-preferences' style={{
							width: '27.5vw'
						}}>
							<Preferences/>
						</div> */}
					</div>
				</div>		
			</div>
		</div>
		);
	}
}

export const Home = ({home, closeDialog, signOut, accSetting, match}) => {
	if(localStorage['access_token'] && 
	(JSON.parse(atob(localStorage['access_token'].split('.')[1]))).exp >= Date.now()/1000){
		return (
			<div>
				<RealTime
					match={match}
					home={home}
					closeDialog={closeDialog}
					signOut={signOut}
					accSetting={accSetting}
				/>
			</div>
		);
	}else{
		location.href = '/';
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
