import React from 'react';
import TextField from 'material-ui/TextField';

export default class ChatInput extends React.Component{
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
            floatingLabelText="Sending your emotion!"
            multiLine={true}
            rows={2}
            />
        );
    }
}