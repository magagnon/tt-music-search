import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/new-releases" class="navbar-brand">Music Search</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/sign-in">Sign In</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/new-releases">New Releases</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/artists/2ye2Wgw4gimLv2eAKyk1NB/albums">Show Artist's Albums</Link>
              </li>
            </ul>
            <Login />
          </div>
        </nav>
      </header>  
    )
  }
}    