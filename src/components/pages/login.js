import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import {fakeAuth} from '../../fakeAuth';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false
    }

  }



  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className="container-fluid login-page page">
        <div className="container inner">

          <form action="#" className="login-form mini-form">
            <h2>Login</h2>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>

            <div class="form-group">
              <button type="button" class="btn btn-primary" onClick={this.login}>Log in</button>
            </div>
          </form>



        </div>
      </div>
    )
  }
}

export default Login;
