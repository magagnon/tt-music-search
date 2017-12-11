import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'

import Artist from "../components/Artist"
import Search from "../components/Search"

import AlbumList from "./AlbumList"
import Callback from "./Callback"
import Header from "./Header"
import LoginPage from "./LoginPage"
import NewReleases from "./NewReleases"
import SearchPage from "./SearchPage"

export default class Layout extends Component {
  
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route path='/sign-in' component={LoginPage} />
          <Route path='/new-releases' component={NewReleases} />
          <Route path='/search' component={SearchPage} />
          <Route path='/artists/:artistId/albums' component={AlbumList} />
          <Route path='/artists/:artistId' component={Artist} />          
          <Route path='/auth/callback' component={Callback} />
        </Switch>
      </div>
    )    
  }
}
