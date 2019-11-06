import React, {Component} from 'react';
// import List from "./List";


class Login extends Component {
  render(){
    return (
        <div>
        <form>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email"/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control"id="password"/>
        </div>
        <button href="" className="btn btn-primary">Login</button>
        <a href="" className="mx-2" >Register</a>
      </form>
      </div>
    );
  }
}

export default Login;
