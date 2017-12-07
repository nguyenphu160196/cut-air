import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Call from 'material-ui/svg-icons/communication/call';
import CallEnd from 'material-ui/svg-icons/communication/call-end';
  

class AnswerDialog extends React.Component{
    constructor(props) {
		super(props);
		this.state = {}
	  }
	componentDidMount() {
    }
    render(){
        const actions = [
            <li className='li-friendlist'>
                <Link to={'/home/call/' + this.props.peerRoute}>
                    <FlatButton
                        icon={<Call color="lightgreen" />}
                        primary={true}
                        onClick={() => {
                            this.props.closeDialog();
                            this.props.socket.emit("answered", {id: this.props.state.socketId ? this.props.state.socketId : this.props.callerSocket, dialog: false});
                        }}
                    /> 
                </Link>
            </li>
                    ,<FlatButton
                        icon={<CallEnd color="red" />}
                        primary={true}
                        onClick={() => {
                            this.props.closeDialog();
                            this.props.socket.emit("deny", {id: this.props.state.socketId ? this.props.state.socketId : this.props.callerSocket, dialog: false});
                        }}
                    />    
		];
        return (
            <div>
                <Dialog
                    className="callDialog"
					actions={actions}
					modal={false}
					open={this.props.dialog}
					contentStyle={{width: '40%'}}
				>
					{this.props.message}
				</Dialog>
            </div>
        )
    }
}

export default AnswerDialog;

