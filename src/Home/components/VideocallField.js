import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Call from 'material-ui/svg-icons/communication/call';
import Video from 'material-ui/svg-icons/av/videocam';

export default class VideoCallField extends React.Component {
    
      constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <Toolbar className="VideoCallToolbar" style={{
                backgroundColor:"#fff"
            }}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle text={this.props.match ? this.props.match.params.childId : "Options"} />
              <ToolbarSeparator />
              <RaisedButton backgroundColor="#0084ff" icon={<Call color="#fff"/>} />
              <RaisedButton backgroundColor="#0084ff" icon={<Video color="#fff"/>} />
            </ToolbarGroup>
          </Toolbar>
        );
      }
    }