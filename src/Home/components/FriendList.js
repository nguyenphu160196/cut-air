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
      }
    render(match){
        const Friend = this.props.array.map((data, i) => {
            return <li className='li-friendlist' key={i}>
                <Link to={`${this.props.match.url}/` + data.id}>
                    <ListItem
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