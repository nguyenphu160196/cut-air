import React from "react";
import FlatButton from 'material-ui/FlatButton';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import CallEnd from 'material-ui/svg-icons/communication/call-end';

class EndCall extends React.Component{
	constructor(props) {
        super(props);
      }
	componentDidMount(){
			
    }
    
	render(){
		return(
			<div className="EndCall">
				<li className='li-friendlist'>
                    <Link to={'/home'}>
                        <FlatButton
                            icon={<CallEnd color="red" />}
                            primary={true}
                            onClick={() => {
                                this.props.existingCall.close();
                                navigator.getUserMedia({audio: false, video: true},
                                    function(mediaStream) {
                                         // can also use getAudioTracks() or getVideoTracks()
                                        if (mediaStream.getVideoTracks().length && mediaStream.getVideoTracks()[0].stop) {
                                            mediaStream.getVideoTracks().forEach(function(track) {
                                                track.stop();
                                            });
                                        }
                                    },
                                    function(error){
                                        console.log('getUserMedia() error', error);
                                    });                                
                            }}
                        /> 
                    </Link>
                </li>
			</div>
		);
	}
}

export default EndCall