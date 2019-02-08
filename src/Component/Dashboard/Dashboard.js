import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: '',
      myPosts: true,
      posts: []
    };
  }
  async componentDidMount () {
    let res = await axios.get(`/api/user_posts`)
    console.log(res.data)
  }
  render() {
    const {username,profile_pic} = this.props;
    console.log(this.props)
    return (
      <div className="App">
       Dashboard
        <h1>Welcome: {username}</h1>
        <img src={profile_pic} alt="Profile Pic"/>
      </div>
    );
  }
}

export default Dashboard;