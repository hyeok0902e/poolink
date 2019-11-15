import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="center">
          <Link to='/login'>로그인</Link>
          <Link to='/register'>회원가입</Link>
        </h4>
      </div>
    )  
  } 
}
