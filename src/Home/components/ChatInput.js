import React from 'react';
import TextField from 'material-ui/TextField';

export default class ChatInput extends React.Component{
    constructor(props) {
        super(props);
      }
    componentDidMount(){

    }
    render(){
        return(
            <TextField
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