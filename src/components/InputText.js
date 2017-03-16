import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<input type='text' style={this.props.styles} 
			  value={this.props.result}
			  placeholder={this.props.placeholder}
			  disabled='readOnly'></input>
		)
	}
}