import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import VideoCallField from './VideocallField.js'
import ChatInput from './ChatInput.js'
import ChatContent from './ChatContent.js'

class ListFriend extends React.Component {
    constructor(props) {
        super(props);
        this.socket = this.props.socket;
        this.state = {list: []}
      }
    componentDidMount() {
        this.props.updateState("flag", "");
        this.socket.on("friend-list", data => {
           this.setState({list: data});
       })
       this.socket.on("set-flag", data => {
           this.props.updateState("flag", 'null');
       })
	} 
    render(match){
        const messageData = {room: "a", message: [{id: '', avatar: '', userId:"1", message: 'minh'}]}
        const Friend = this.state.list.map((data, i) => {
            if(data.user.id != JSON.parse(localStorage['user']).id){
                return <li className='li-friendlist' key={i}>
                <Link to={`${this.props.match.path}/chat/` + data.user.id}>
                    <ListItem
                        onClick={() => {
                            this.props.updateState("ChatName", data.user.name);
                            this.props.updateState("messageData", messageData);
                            this.props.updateState("socketId", data.id);
                            this.props.updateState("peerId", data.user.id);
                            this.props.updateState("flag", "");        
                            this.props.socket.emit("send-id", {ownId: JSON.parse(localStorage['user']).id, friendId: data.user.id});
                        }}
                        className='friend-member'
                        primaryText={data.user.name}
                        leftAvatar={<Avatar src={data && data.avatar ? data.avatar : ""}>{data && data.avatar ? "" : data.user.name.charAt(0)}</Avatar>}
                        rightIcon={this.props.state.flag != '' ? <ChatBubble color='#0084ff'/> : <ChatBubble color='#fff'/>}>
                    </ListItem>
                </Link>
            </li>
            }
        });
        return (
            <div className='friend-list'>
                <List>
                    <Subheader>Recent chats</Subheader>
                    {Friend}
                </List>
            </div>
        );
    }
}

export default ListFriend;