import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'

import NewReleases from "./NewReleases"

import Callback from "./Callback"
import Header from "./Header"
import LoginPage from "./LoginPage"

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route exact path='/' component={NewReleases} />
          <Route path='/sign-in' component={LoginPage} />
          <Route path='/new-releases' component={NewReleases} />
          <Route path='/auth/callback' component={Callback} />
        </Switch>
      </div>
    )    
  }
}
