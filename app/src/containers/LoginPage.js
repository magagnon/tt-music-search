import React, { Component } from 'react'

import Login from '../components/Login'

export default class LoginPage extends Component { 
  render() {
    return (
      <main role="main" class="container">      
        <div class="text-center">
          <p class="lead">Authentication</p>
          <Login />
        </div>
      </main>
    )
  }
}  
    