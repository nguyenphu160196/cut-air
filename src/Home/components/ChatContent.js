import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery'

export default class ChatContent extends React.Component{
    constructor(props) {
        super(props);
        this.socket = this.props.socket;
        this.state = {message: []}
      }
         
    componentDidMount(){ 
        this.props.socket.on("recieve-message", data => {
            const messageData = this.props.state.messageData;
            messageData.push(data);
            this.props.updateState("messageData", messageData);
        })
        $('.chat-content').scrollTop($('.chat-content')[0].scrollHeight);
    }  
    componentDidUpdate(){
        $('.chat-content').scrollTop($('.chat-content')[0].scrollHeight);
    } 
    render(){
        const MessageContent = this.props.state.messageData ? this.props.state.messageData.map((data, i) => {
            if(this.props.match.params.childId != data.from._id){
                return(
                    <div className="MessageContent" id="box" key={i} style={{display: 'flex', fontFamily: 'Helvetica'}}>
                        <div style={{marginRight: '10px'}}><Avatar>{this.props.state.ChatName ? (this.props.state.ChatName).charAt(0) : 'U'}</Avatar></div>
                        <div className="friendMessage">{data.text}</div>
                    </div>
                )
            }else{
                return(
                    <div className="MessageContent" key={i} style={{display: 'flex', justifyContent: 'flex-end', fontFamily: 'Helvetica'}} >
                        <div className="OwnMessage">{data.text}</div>
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