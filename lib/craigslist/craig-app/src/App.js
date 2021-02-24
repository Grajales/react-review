import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
// import Show from "./Show";
class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      craigs: this.props.craigs
    }
  }
  render() {
    console.log(this.props.craigs)
    //console.log(this.state) also works
    return (
        <div>
          <Link to='/'> 
          <h1>Craigs List</h1>
          </Link>
       
          <Route exact path='/' render={(routerProps) => 
          <Homepage craigs={this.state} {...routerProps} /> 
          }>
            </Route>
 
       
        </div>
    );
  }
}

export default App;

