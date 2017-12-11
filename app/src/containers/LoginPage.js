import React, { Component } from 'react'

import AuthButton from '../components/AuthButton'
import spotifyImage from '../../public/spotify.png'

export default class LoginPage extends Component { 
  render() {
    return (
      <main role="main" class="container">      
        <div class="jumbotron text-center">
          <img src={spotifyImage} height="100" />
          <p class="lead">Please sign in to your Spotify account</p>
          <p><AuthButton /></p>
        </div>
      </main>
    )
  }
}  
    