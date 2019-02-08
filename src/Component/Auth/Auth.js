import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import './Auth.css'

class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:''
    }
  }
  componentDidMount(){
    const {id} = this.props;
    if(id){
      this.props.history.push('/dashboard');
    } else {
      axios.get('/api/user')
      .then(res=>{
        console.log(res)
        this.props.updateUser(res.data);
        this.props.history.push('/dashboard')
      })
      .catch(err => {
      })
    }
  }
  
  handleChange(prop, val) {
    this.setState({
      [prop]:val
    })
  }
  register = () => {
    const {username,password} = this.state
    axios.post('/auth/register', {username, password})
    .then(res => {this.props.updateUser(res.data);this.props.history.push('/dashboard')})
    .catch(err => {console.log(err)})
  }
  
  login = () => {
    const {username,password} = this.state
    axios.post('/auth/login', {username, password})
    .then(res => {this.props.updateUser(res.data);this.props.history.push('/dashboard')})
    .catch(err => {console.log(err)})
  }
  render() {
    const {username, password} = this.state;
    console.log(this.state);
    
    return (
      <div className="Auth">
      <img src='/images/trollface.psd' alt='trollface'/>
        <h1>Helo</h1>
         <input type='text' value={username} onChange={e => this.handleChange('username', e.target.value)} placeholder='Username'/>
         <input type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} placeholder='Password'/>
         <button onClick={() => this.login()}>Login</button>
         <button onClick={() => this.register()}>Register</button>   
      </div>
    );
  }
}

export default connect(null, {updateUser})(Auth);