import React from 'react'
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Call from 'material-ui/svg-icons/communication/call';
import Video from 'material-ui/svg-icons/av/videocam';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class VideoCallField extends React.Component {
    
      constructor(props) {
        super(props);
        this.peerConnect = this.peerConnect.bind(this);
        this.openStream = this.openStream.bind(this);
        this.playStream = this.playStream.bind(this);
      }
      componentDidMount(){
        this.props.socket.on("access", data => {
          this.openStream().then(stream => {   
            this.playStream('localStream', stream);
            const call = this.props.peer.call(this.props.state.peer, stream);
            call.on('stream', remoteStream => this.playStream('remoteStream',remoteStream));
          }) 
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

      peerConnect(){   
        this.props.socket.emit("calling", {id: this.props.state.socketId, user: this.props.state.ChatName , dialog: true, caller: JSON.parse(localStorage['user']).name, callerId: JSON.parse(localStorage['user']).id, callerSocket: this.props.socket.id});
        this.props.call(this.props.state.ChatName); 
        this.openStream(); 
      }

      render() {
        return (
          <Toolbar className="VideoCallToolbar" style={{
                backgroundColor:"#fff"
            }}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle text={this.props.state.ChatName ? this.props.state.ChatName : ""} />
              <ToolbarSeparator />
              <RaisedButton 
                backgroundColor="#0084ff" 
                icon={<Call color="#fff"/>} 
              />
              <li className='li-friendlist'>
                <Link to={'/home/call/' + this.props.state.peerId}>
                  <RaisedButton 
                    onClick={this.peerConnect}
                    backgroundColor="#0084ff" 
                    icon={<Video color="#fff"/>} 
                  />
                </Link>
              </li>
            </ToolbarGroup>
          </Toolbar>
        );
      }
    }