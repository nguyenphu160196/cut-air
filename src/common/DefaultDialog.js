import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class DialogMessage extends React.Component{
    constructor(props) {
        super(props);       
    }
    render(){
        const actions = [
            <li className='li-friendlist'>
                <Link to={'/home/chat/' + this.props.state.peerId}>
                    <FlatButton
                    label="OK"
                    primary={true}
                    onClick={() => {
                        this.props.closeDialog();
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
		];
        return (
            <div>
                <Dialog
					actions={actions}
					modal={false}
					open={this.props.dialog}
					onRequestClose={this.props.closeDialog}
					contentStyle={{width: '40%'}}
				>
					{this.props.message}
				</Dialog>
            </div>
        )
    }
}

export default DialogMessage;

