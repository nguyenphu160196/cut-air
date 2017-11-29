import React from 'react';
import TextField from 'material-ui/TextField';

export default class ChatInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.textChange = this.textChange.bind(this);
        this.state = {text: '', userId: JSON.parse(localStorage['user']).id}
      }
    componentDidMount(){

    }
    textChange(e){
        this.setState({text: e.target.value})
    }
    handleKeyPress(e){       
		if (e.charCode == 13 && !e.nativeEvent.shiftKey) {
			if(this.state.text !=""){
                this.props.socket.emit('send-message', {socketId: this.props.state.socketId, userId: this.state.userId,text: this.state.text})
                this.setState({text: ''});
                e.preventDefault();
            }
        }
    }
    render(){
        return(
            <TextField
            value={this.state.text}
            onChange={this.textChange}
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