import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux"
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import Artist from "../components/Artist"
import Search from "../components/Search"

import AlbumList from "./AlbumList"
import Callback from "./Callback"
import Header from "./Header"
import LoginPage from "./LoginPage"
import NewReleases from "./NewReleases"
import SearchPage from "./SearchPage"

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
          <Route path='/login' component={LoginPage} />
          <Route path='/auth/callback' component={Callback} />
          
          <Route exact path='/' component={SearchPage} />          
          <Route path='/new-releases' component={NewReleases} />
          <Route path='/search' component={SearchPage} />
          <Route path='/artists/:artistId/albums' component={AlbumList} />
          <Route path='/artists/:artistId' component={Artist} />  
        </Switch>
      </div>
    )    
  }
}

// const mapStateToProps = (store) => {
//   return {
//     isLoggedIn: store.auth.isLoggedIn,
//   };
// }

// export default connect(
//   mapStateToProps
// )(Layout)
