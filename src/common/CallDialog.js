import React from 'react'
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

class CallDialog extends React.Component{
    render(){
        const actions = [
			<LinearProgress mode="indeterminate" />
		];
        return (
            <div>
                <Dialog
					actions={actions}
					modal={false}
					open={this.props.dialog}
					contentStyle={{width: '40%'}}
				>
					{this.props.message}
				</Dialog>
            </div>
        )
    }
}

export default CallDialog;

