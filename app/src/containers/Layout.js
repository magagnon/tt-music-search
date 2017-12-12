import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux"

import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'

import Artist from "../components/Artist"
import Search from "../components/Search"

import AlbumList from "./AlbumList"
import Callback from "./Callback"
import Header from "./Header"
import LoginPage from "./LoginPage"
import NewReleases from "./NewReleases"
import SearchPage from "./SearchPage"

const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/search',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
   // If selector is true, wrapper will not redirect
   // So if there is no user data, then we show the page
  authenticatedSelector: state => !state.auth.isLoggedIn,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: '/login',
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: state => state.auth.isLoggedIn,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default class Layout extends Component {  
  
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route path='/login' component={userIsNotAuthenticated(LoginPage)} />
          <Route path='/auth/callback' component={Callback} />
          
          <Route exact path='/' component={userIsAuthenticated(SearchPage)} />          
          <Route path='/new-releases' component={userIsAuthenticated(NewReleases)} />
          <Route path='/search' component={userIsAuthenticated(SearchPage)} />
          <Route path='/artists/:artistId/albums' component={userIsAuthenticated(AlbumList)} />
          <Route path='/artists/:artistId' component={userIsAuthenticated(Artist)} />  
        </Switch>
      </div>
    )    
  }
}