import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';

// This is the body of the application
export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    );  
  };  
}; 