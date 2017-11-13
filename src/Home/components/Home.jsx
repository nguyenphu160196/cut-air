import React from 'react'
import axios from 'axios'

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if(!localStorage['access_token']){
			location.href = '/';
		}
		return (
			<div>	
			Home
			</div>
		);
	}
}

export default Home;