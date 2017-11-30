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
import Peer from 'peerjs'; 
var peer = new Peer(localStorage['user'] ? JSON.parse(localStorage['user']).id : "id", {key: '74pu89sk3ce4s4i'}); 

export default class VideoCallField extends React.Component {
    
      constructor(props) {
        super(props);
        this.openStream = this.openStream.bind(this);
        this.playStream = this.playStream.bind(this);
        this.peerConnect = this.peerConnect.bind(this);
      }
      componentDidMount(){
        
        peer.on('call', call=>{
          this.openStream().then(stream=>{
            call.answer(stream);
            this.playStream('localStream', stream);
            call.on('stream', remoteStream => this.playStream('remoteStream', remoteStream));
          });
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
      };

      peerConnect(){     
        this.openStream().then(stream => {
          this.playStream('localStream', stream);
          const call = peer.call(this.props.state.peerId, stream);
          call.on('stream', remoteStream=> this.playStream('remoteStream',remoteStream));
        });
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