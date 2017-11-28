import React from 'react';
import Avatar from 'material-ui/Avatar';

export default class ChatContent extends React.Component{
    constructor(props) {
        super(props);
        this.socket = this.props.socket;
      }
    componentDidMount(){
        this.socket.on("sent-message", data => {
            console.log(data);
        })
    }    
    render(){
        const MessageContent = this.props.state.messageData ? this.props.state.messageData.message.map((data, i) => {
            if(this.props.match.params.childId == data.userId){
                return(
                    <div className="MessageContent" key={i} style={{display: 'flex', fontFamily: 'Helvetica'}}>
                        <div style={{marginRight: '10px'}}><Avatar>{this.props.state.ChatName ? (this.props.state.ChatName).charAt(0) : 'U'}</Avatar></div>
                        <div className="friendMessage">{data.message + " Friend's message"}</div>
                    </div>
                )
            }else{
                return(
                    <div className="MessageContent" key={i} style={{display: 'flex', justifyContent: 'flex-end', fontFamily: 'Helvetica'}} >
                        <div className="OwnMessage">{data.message + " Own message"}</div>
                    </div>
                )
            }
        }) : ""
        return(
            <div>                
                {MessageContent}
            </div>
        );
    }
}