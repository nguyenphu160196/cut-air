import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class AnswerDialog extends React.Component{
    render(){
        const actions = [
            <li className='li-friendlist'>
                <Link to={'/home/call/' + this.props.peerId}>
                    <FlatButton
                        label="OK"
                        primary={true}
                        onClick={() => {
                            this.props.closeDialog();
                            this.props.socket.emit("answered", {id: this.props.state.socketId, dialog: false})
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

