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
      }
    componentDidMount() {
       
	} 
    render(match){
        const messageData = {room: "a", message: [{id: '', avatar: '', userId:"1", message: 'minh'}, {id: '', avatar: '', userId:"2", message: 'ban'}]}
        const Friend = this.props.array.map((data, i) => {
            return <li className='li-friendlist' key={i}>
                <Link to={`${this.props.match.path}/chat/` + data.id}>
                    <ListItem
                        onClick={() => {
                            this.props.updateState("ChatName", data.name);
                            this.props.updateState("messageData", messageData);
                            this.socket.emit("join-room", messageData.room);
                            }
                        }
                        className='friend-member'
                        primaryText={data.name}
                        leftAvatar={<Avatar src={data && data.avatar ? data.avatar : ""}>{data && data.avatar ? "" : data.name.charAt(0)}</Avatar>}
                        rightIcon={<ChatBubble color='#0084ff'/>}>
                    </ListItem>
                </Link>
            </li>
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