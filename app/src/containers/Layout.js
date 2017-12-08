import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'

import Artist from "../components/Artist"

import Albums from "./Albums"
import Callback from "./Callback"
import Header from "./Header"
import LoginPage from "./LoginPage"
import NewReleases from "./NewReleases"

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route exact path='/' component={NewReleases} />
          <Route path='/sign-in' component={LoginPage} />
          <Route path='/new-releases' component={NewReleases} />
          <Route path='/artists/:artistId/albums' component={Albums} />
          <Route path='/artists/:artistId' component={Artist} />          
          <Route path='/auth/callback' component={Callback} />
        </Switch>
      </div>
    )    
  }
}
