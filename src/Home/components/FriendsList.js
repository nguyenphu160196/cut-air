import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class ListFriend extends React.Component {
    render(){
        const Friend = this.props.array.map((data, i) => {
            return <ListItem
                className='friend-member'
                primaryText={data.name}
                leftAvatar={<Avatar src={data && data.avatar ? data.avatar : ""}>{data && data.avatar ? "" : data.name.charAt(0)}</Avatar>}
                rightIcon={<ChatBubble color='#0084ff'/>}
            ></ListItem>
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