import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

class OwnAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleTouchTap = this.handleTouchTap.bind(this);
      }

    handleTouchTap = (event) => {
        event.preventDefault();
        this.setState({
            anchorEl: event.currentTarget,
        });
    };    

    render() {
        const data = JSON.parse(localStorage.getItem('user'));
        return (
            <div>
                <RaisedButton
                className='user-button'
                style={{
                    width: '100%',
                    height: '50px'
                }}
                icon={<ArrowDropDown className='ArrowDropDown'/>}
                onClick={(e) => {
                    this.handleTouchTap(e);
                    this.props.accSetting();
                }}
                >
                    <Avatar style={{
                        margin: '5px'
                    }} src={data && data.avatar ? data.avatar : ""}>{data && data.avatar ? "" : data.name.charAt(0)}</Avatar>  
                    {data && data.name ? data.name : "Username"}
                </RaisedButton>
                <Popover
                    open={this.props.acc_set}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    onRequestClose={this.props.closeDialog}
                >
                    <Menu>
                        <MenuItem onClick={this.props.signOut} primaryText="Log out" />
                    </Menu>
                </Popover>
            </div>
        );
    }
}

export default OwnAccount