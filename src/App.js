import React, {Component} from 'react';
import List from "./List";
// import Login from "./Login";


class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
          <h1 className="text-center">LuthfiTodo</h1>
          {/* <Login/> */}
          <br></br>
          <List/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
