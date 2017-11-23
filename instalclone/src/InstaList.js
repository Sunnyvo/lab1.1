import React from 'react';
import InstaPost from "./InstaPost"
  export default class InstaList extends React.Component {
    render() {
			const posts = this.props.posts && this.props.posts.map((post) => {
				return (<InstaPost {...post}/>);
			});
      return (
				<div>
				{posts}
				</div>
      );
    }
  }