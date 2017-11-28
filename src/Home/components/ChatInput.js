import React from 'react';
import TextField from 'material-ui/TextField';

export default class ChatInput extends React.Component{
    constructor(props) {
        super(props);
        this.socket = this.props.socket;
        this.handleKeyPress = this.handleKeyPress.bind(this);
      }
    componentDidMount(){

    }
    handleKeyPress(e){
		if (e.charCode == 13 && !e.nativeEvent.shiftKey) {
			if(e.target.value !=""){
                this.socket.emit("send-message", {room: this.props.state.messageData.room, message: e.target.value});
                e.target.value="";
            }
            e.preventDefault();
        }
    }
    render(){
        return(
            <TextField
            onKeyPress={this.handleKeyPress}
            style={{
                width: '100%'
            }}
            underlineFocusStyle={{
                borderColor:"#0084ff"
            }}
            floatingLabelFocusStyle={{
                color:"#0084ff"
            }}
            textareaStyle={{
                padding: '0px 10px'
            }}
            floatingLabelText="Sending your message!"
            multiLine={true}
            rows={2}
            rowsMax={2}
            />
        );
    }
}