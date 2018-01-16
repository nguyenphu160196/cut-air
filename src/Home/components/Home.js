import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {closeDialog, signOut, accSetting, updateState, call} from '../modules/home.js'
import io from 'socket.io-client'
// const socket = io('https://localhost:9090');
const socket = io('http://cut-air.herokuapp.com/');
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
import CallDialog from '../../common/CallDialog.js'
import AnswerDialog from '../../common/AnswerDialog.js'
import DefaultDialog from '../../common/DefaultDialog.js'
import Stream from './Stream.js';
import EndCall from './EndCall.js'
const port = process.env.PORT || 9090;
var rand = require("random-key");
import Peer from 'peerjs'; 
const peer = new Peer({key: '74pu89sk3ce4s4i', debug: 3});
// var peer = new Peer(rand.generate(),{host: 'cut-air.herokuapp.com', port: port, path: '/peerjs'});
// var peer = new Peer(rand.generate(),{host: 'localhost', port: port, path: '/peerjs'});

export class RealTime extends React.Component{
	constructor(props) {
		super(props);
		this.openStream = this.openStream.bind(this);
		this.playStream = this.playStream.bind(this);
		this.state = {list: [], existingCall: ""}
	}
	componentDidMount() {
		peer.on('open', id => {
			socket.emit("send-client", {user: JSON.parse(localStorage['user']),peer: id});
		});
		socket.on("previous-message", data => {
            this.props.updateState("messageData", data)
        })
		socket.on("answer", data => {
			this.props.updateState("dialogx", data.dialog);
			this.props.updateState("messagex", data.caller + " is calling you");
			this.props.updateState("callroute", data.callerId);	
			this.props.updateState("callerSocket", data.callerSocket);
		})
		socket.on("access", data => {
			this.props.updateState("dialog", data);
		})
		socket.on("not-access", data => {
			this.props.updateState("dialog", data);
			this.props.updateState("dialogm", true);
			this.props.updateState("messagem", "Calling have been failed!");
		})
		peer.on('call', call=>{
			this.openStream().then(stream=>{
				call.answer(stream);
				this.playStream('localStream', stream);
				call.on('stream', remoteStream => this.playStream('remoteStream', remoteStream));
			});
			if(this.state.existingCall != "") {
				this.state.existingCall.close();
			  }
			  this.setState({existingCall: call});
		});
	}  
	openStream(){
        const config = {audio: false, video: true};
        return navigator.mediaDevices.getUserMedia(config);
	};
	playStream(idVideoTag, stream){
		const video = document.getElementById(idVideoTag); 
		video.srcObject = stream;
		video.play();
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
								call={this.props.call}
								updateState={updateState}
								peer={peer}
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
									<Route path={`${this.props.match.url}/call/:childId`} render={(props) => (
										<EndCall 
											{...props} 
											state={this.props.home} 
											socket={socket} 
											updateState={this.props.updateState}
											existingCall={this.state.existingCall}
										/>
									)}/>
									<Route path={`${this.props.match.url}/chat/:childId`} render={(props) => {
										socket.on("friend-list", array => {
											array.map(data => {
												if(data.user.id == props.match.params.childId){
													this.props.updateState("ChatName", data.user.name);
													this.props.updateState("socketId", data.id);
													this.props.updateState("peerId", data.user.id);
													this.props.updateState("peer", data.peer);
													socket.emit("send-id", {ownId: JSON.parse(localStorage['user']).id, friendId: data.user.id});
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

export const Home = ({home, closeDialog, signOut, accSetting, updateState, match, call}) => {
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
					call={call}
				/>
				<DefaultDialog dialog={home.dialogm} message={home.messagem} closeDialog={closeDialog} state={home} />
				<CallDialog dialog={home.dialog} message={home.message} />
				<AnswerDialog 
					dialog={home.dialogx ? home.dialogx : false} 
					closeDialog={closeDialog} 
					message={home.messagex ? home.messagex : ""}
					peerRoute={home.callroute ? home.callroute : ""}
					callerSocket={home.callerSocket ? home.callerSocket : ""}
					socket={socket}
					state={home}
				/>
			</div>
		);
	}else{
		location.href = '/';
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({closeDialog, signOut, accSetting, updateState, call}, dispatch);
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
	updateState: PropTypes.func.isRequired,
	call: PropTypes.func.isRequired
}
