import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../components/Login'

export default class Header extends Component {
  
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <NavLink to="/new-releases" class="navbar-brand">Music Search</NavLink>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NavLink class="nav-link" to="/sign-in">Sign In</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/search">Search</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/new-releases">New Releases</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/artists/2ye2Wgw4gimLv2eAKyk1NB/albums">Show Metallica's Albums</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/artists/51Blml2LZPmy7TTiAg47vQ/albums">Show U2's Albums</NavLink>
              </li>
            </ul>

            <Login />
          </div>
        </nav>
      </header>  
    )
  }
}    