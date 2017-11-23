import React from 'react';

  export default class InstaPost extends React.Component {
    render() {
      return (
				<div>
					<img src={this.props.image}/>
					<p>{this.props.caption}</p>
					<p>{this.props.likes} Likes</p>
				</div>
      );
    }
  }