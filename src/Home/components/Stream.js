import React from "react";

class Stream extends React.Component{
	constructor(props) {
        super(props);
        
      }
	componentDidMount(){
			
	}
	
	render(){
		return(
			<div className="stream">
				<video id="remoteStream" width="520" controls></video>
				<video id="localStream" width="220" controls></video>
			</div>
		);
	}
}

export default Stream