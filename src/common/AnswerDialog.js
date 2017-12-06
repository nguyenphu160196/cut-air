import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class AnswerDialog extends React.Component{
    constructor(props) {
		super(props);
		this.state = {}
	  }
	componentDidMount() {
        this.props.socket.on("answer", data => {
            console.log(data.peer);
        })
    }
    render(){
        const actions = [
            <li className='li-friendlist'>
                <Link to={'/home/call/' + this.props.peerRoute}>
                    <FlatButton
                        label="OK"
                        primary={true}
                        onClick={() => {
                            this.props.closeDialog();
                            this.props.socket.emit("answered", {id: this.props.state.socketId ? this.props.state.socketId : this.props.callerSocket, dialog: false});
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
					contentStyle={{width: '40%'}}
				>
					{this.props.message}
				</Dialog>
            </div>
        )
    }
}

export default AnswerDialog;

