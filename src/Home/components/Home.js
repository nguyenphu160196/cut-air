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

const friend = [{id: '1',name: 'Brendan Lim', avatar: ''}, {id: '2',name: 'Eric Hoffman', avatar: ''}, {id: '3',name: 'Grace Ng', avatar: ''}, {id: '4',name: 'Kerem Suer', avatar: ''}];

export class RealTime extends React.Component{
	constructor(props) {
		super(props);
      }
	componentDidMount() {
		
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
							array={friend}
							match={this.props.match}
							socket={socket}
							updateState={this.props.updateState}	
						/>
					</div>
				</div>
				<div className='chat-class'>
					<div className='videocall-field'>
						<Route path={`${this.props.match.url}/chat/:childId`} render={(props) => (
							<VideoCallField {...props} state={this.props.home} socket={socket} />
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
									<ChatContent {...props} state={this.props.home} socket={socket} />
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
								<Route component={NotFound}/>
							</Switch>
							</div>
							<div className='chat-input'>
								<Switch>
									<Route path={`${this.props.match.url}/chat/:childId`} render={(props) => (
										<ChatInput {...props} state={this.props.home} socket={socket} />
									)}/>
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
