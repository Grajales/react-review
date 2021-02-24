import React, { Component, useDebugValue } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Homepage.css';
export default class Homepage extends Component {
    
    render() {
        console.log("homepage",this.props.craigs);
        const object = this.props.craigs;
        let craig_list = this.props.craigs.craigs.map((value,index) =>
        <div key={index}> 
        <h2> {value.title}</h2>
        <img src={`images/${value.image}`}/>
        </div>
    )
          console.log('craig_list:', craig_list)
      return (
        <div>
            {craig_list}
        </div>
      )
    }
}
