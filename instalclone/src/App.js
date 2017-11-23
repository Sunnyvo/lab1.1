import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstaList from './InstaList.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Hello Sunny"
    }
    this.state ={
      posts: [
        {
          id: 1,
          image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23594930_126440671464105_1598861271686447104_n.jpg",
          caption: "#Fall #celebrations at #home, as we are giving thanks to friends, family, and work accomplishments- and an #abundant life.",
          likes: 25
        },
        {
        id: 2,
        image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23594930_126440671464105_1598861271686447104_n.jpg",
        caption: "#Fall #celebrations at #home, as we are giving thanks to friends, family, and work accomplishments- and an #abundant life.",
        likes: 25
        },
      ]
    }
  }

  render() {
    const toggleTitle = () => {
      const newState = this.state.title ? null : "Toggled state"
      this.setState({
        title: newState
      });
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={toggleTitle} />
          <h1 className="App-title">{this.state.title || this.props.title}</h1>
        </header>
        <p className="App-intro">
          <InstaList posts={this.state.posts}/>
        </p>
      </div>
    );
  }
}

export default App;
