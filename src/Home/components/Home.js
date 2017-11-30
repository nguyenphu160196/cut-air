import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {closeDialog, signOut, accSetting, updateState} from '../modules/home.js'
import io from 'socket.io-client'
const socket = io('http://localhost:9090');
import {
    BrowserRouter as Router, Route, Switch
  } from 'react-router-dom'

import ListFriend from './FriendList.js'
import OwnAccount from './OwnAccount.js'
import VideoCallField from './VideocallField.js'
import ChatInput from './ChatInput.js'
import ChatContent from './ChatContent.js'
import Preferences from './Preferences.js'
import NotFound from '../../common/NotFound.js'
import Stream from './Stream.js';

export class RealTime extends React.Component{
	constructor(props) {
		super(props);
		this.state = {list: []}
	  }
	componentDidMount() {
		socket.emit("send-client", JSON.parse(localStorage['user']));
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
						<ListFriend 
							match={this.props.match}
							state={this.props.home}
							socket={socket}
							updateState={this.props.updateState}	
						/>
					</div>
				</div>
				<div className='chat-class'>
					<div className='videocall-field'>
						<Route path={`${this.props.match.url}/chat/:childId`} render={(props) => (
							<VideoCallField 
								{...props} 
								state={this.props.home} 
								socket={socket} 
							/>
						)}/>					
					</div>
					<div className='chat-main'>
						<div className='chat-field' style={{
							width: '77vw'
						}}>
							<div className='chat-content' style={{
							height: 'calc(100vh - 148px)'
						}}>
							<Switch>
								<Route path={`${this.props.match.url}/chat/:childId`} render={(props) => (
									<ChatContent 
										{...props} 
										state={this.props.home} 
										socket={socket} 
										updateState={this.props.updateState}
									/>
								)}/>
								<Route exact path={this.props.match.url} render={() => (
									<div className='WellcomeBack'>
										<div className='WellcomeBack-txt'>Welcome Back!</div>		
										<div className='wcb-intro'>	
											<div className='wcb-intro-img'></div>
											<div className='wcb-intro-txt'>
												<h1>Introducing video calling in "Cut Air".</h1>
												<p>Now you can have face-to-face conversations with friends and family. It’s fast and easy to make video calls anywhere in the world.</p>
											</div>
										</div>				
									</div>
								)}/>
								<Route path={`${this.props.match.url}/call/:childId`} render={(props) => (
									<Stream 
										{...props} 
										state={this.props.home} 
										socket={socket} 
										updateState={this.props.updateState}
									/>
								)}/>
								<Route component={NotFound}/>
							</Switch>
							</div>
							<div className='chat-input'>
								<Switch>
									<Route path={`${this.props.match.url}/chat/:childId`} render={(props) => {
										const messageData = {room: "a", message: [{id: '', avatar: '', userId:"1", message: 'minh'}]}
										socket.on("friend-list", array => {
											array.map(data => {
												if(data.user.id == props.match.params.childId){
													this.props.updateState("ChatName", data.user.name);
													this.props.updateState("messageData", messageData);
													this.props.updateState("socketId", data.id);
													this.props.updateState("peerId", data.user.id);
												}
											})
										})	
										return(
											<ChatInput {...props} 
												state={this.props.home} 
												socket={socket}
												updateState={this.props.updateState}
											/>
										)
									}}/>
								</Switch>
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

export const Home = ({home, closeDialog, signOut, accSetting, updateState, match}) => {
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
					updateState={updateState}
				/>
			</div>
		);
	}else{
		location.href = '/';
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({closeDialog, signOut, accSetting, updateState}, dispatch);
}

const mapStatetoProps = (state)=>{
	return {home: state.HomeReducer}
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);

Home.PropTypes = {
	home: PropTypes.object.isRequired,
	closeDialog: PropTypes.func.isRequired,
	signOut: PropTypes.func.isRequired,
	accSetting: PropTypes.func.isRequired,
	updateState: PropTypes.func.isRequired
}
