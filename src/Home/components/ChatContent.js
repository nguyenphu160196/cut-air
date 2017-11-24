import React from 'react';

export default class ChatContent extends React.Component{
    constructor(props) {
        super(props);
      }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <div>{this.props.match ? this.props.match.params.childId : "b"}</div>
            </div>
        );
    }
}