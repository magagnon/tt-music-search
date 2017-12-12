import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AuthButton from '../components/AuthButton'

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
                <NavLink class="nav-link" to="/login">Sign In</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/search">Search</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/new-releases">New Releases</NavLink>
              </li>
            </ul>

            <AuthButton />
          </div>
        </nav>
      </header>  
    )
  }
}    