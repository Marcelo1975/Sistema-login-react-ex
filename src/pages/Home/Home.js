import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			jwt:localStorage.getItem('jwt')
		};

		if(this.state.jwt == '' || typeof this.state.jwt == 'undefined') {
			this.props.history.push('/Login');
		}
	}

	render() {
		return (
			<div>
				Página Home...
				<br/>
				JWT: {this.state.jwt}
				<br/>
				<Link to="/sair">Sair</Link>
				<br/>
				<Link to="/sobre">Ir para página sobre</Link>
			</div>
		);
	}

}