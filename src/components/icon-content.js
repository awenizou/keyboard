import './style.scss';
import React from 'react';  

export default class extends React.Component {
    render() {
    	return (
    		<div className="icon_content">
    		      <div className="icon" style={this.props.iconStyles}></div>
    		      <div className="title_content" style={this.props.contentStyles}>{this.props.content}</div>
    		</div>
    	)
    }
}
