import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from 'redux-implicit-oauth2'

import config from 'config'

class AuthButton extends Component {
  // ({ isLoggedIn, login, logout }) => {

  // componentDidUpdate () {
  //   // const { router } = this.context
  //   const { isLoggedIn, isLoggingIn, router } = this.props
  //   // const { history } = this.props
    
  //   // if (session.userSessionData.get('logged_in') == false) {
  //   //   router.transitionTo('/login');
  //   // }

  //   console.log('AuthButton component will update: ', isLoggedIn, isLoggingIn, router)

  //   // if (!isLoggedIn && !isLoggingIn)
  //   //   router.transitionTo('/login')
  //   //   //history.pushState(null, '/login') or
  //   //   //history.replaceState(null, '/login')
  //   //   //router.transition('/login')  
  // }

  render () {
    const { isLoggedIn, login, logout } = this.props

    if (isLoggedIn) {
      return <button type='button' onClick={logout}>Logout</button>
    } else {
      return <button type='button' class="btn btn-success" onClick={login}>Login</button>
    }
  }
}

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  //router: Router,
  isLoggedIn: auth.isLoggedIn,
  isLoggingIn: auth.isLoggingIn
})

const mapDispatchToProps = {
  login: () => login(config),
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)