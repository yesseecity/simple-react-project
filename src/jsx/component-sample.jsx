import React from 'react';
import axios from 'axios';

export class YourCalss extends React.Component {
  constructor(props) {
    // console.log('Lifecycle - constructor')
    super(props);
    this.state = {};
  }
  componentWillReceiveProps() {
    // in React 17.0 well remove this method
    // console.log('Lifecycle - componentWillReceiveProps');
  }
  componentWillMount() {
    // in React 17.0 well remove this method
    // console.log('Lifecycle - componentWillMount');
  }
  componentDidMount() {
    // console.log('Lifecycle - componentDidMount');
  }
  componentDidUpdate() {
    // console.log('Lifecycle - componentDidUpdate');
  }
  componentWillUnmount() {
    // in React 17.0 well remove this method
    // console.log('Lifecycle - componentDidUpdate');
  }
  getDerivedStateFromProps() {
    // console.log('Lifecycle - getDerivedStateFromProps'); 
  }
  getSnapshotBeforeUpdate() {
    // console.log('Lifecycle - getSnapshotBeforeUpdate'); 
  }
  UNSAFE_componentWillReceiveProps() {
    // console.log('Lifecycle - UNSAFE_componentWillReceiveProps');
  }
  UNSAFE_componentDidUpdate() {
    // console.log('Lifecycle - UNSAFE_componentDidUpdate');
  }
  UNSAFE_componentWillUnmount() {
    // console.log('Lifecycle - UNSAFE_componentWillUnmount');
  }
  apiAxiosGet() {
    axios.get('http://httpbin.org/get')
      .then((response)=>{
        console.log('response: ', response)
      })
      .catch((error)=>{
        console.error('error: ', error);
      });
  }
  apiAxiosPost() {
    var body = {
        firstName: 'testName',
        lastName: 'testLastName'
    };

    // for header Content-Type is application/json
    axios.post('http://httpbin.org/post', body)
      .then((response)=>{
        console.log('response: ', response);
      })
      .catch((error)=>{
        console.error('error: ', error);
      });

    // for header Content-Type is application/x-www-form-urlencoded
    var params = new URLSearchParams();
    params.append('user',JSON.stringify(body))
    axios.post('http://httpbin.org/post', params);
  }
  render() {
    // console.log('Lifecycle - render')
    return (
      <h1>Hello</h1>
    );
  }
}
