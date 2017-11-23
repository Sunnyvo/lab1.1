import React from 'react';
import InstaPost from "./InstaPost"
  export default class InstaList extends React.Component {
		componentWillMount() {
			const key = 'token';
			console.log('mounted');
			const existingToken = sessionStorage.getItem(key);
			console.log(existingToken);
			const accessToken = window.location.hash.split("=")[1];
			console.log(accessToken);
			const oauthUrl = "https://www.instagram.com/oauth/authorize/?client_id=0823ada4b2394de49d191f727e521837&redirect_uri=http://localhost:3000&response_type=token";

			if (!accessToken && !existingToken) {
				window.location.replace(oauthUrl);
			}
		}
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