import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login, logout } from 'redux-implicit-oauth2'

import config from 'config'

class AuthButton extends Component {
  render () {
    const { isLoggedIn, login, logout } = this.props

    if (isLoggedIn) {
      return <button type='button' class="btn btn-outline-success" onClick={logout}>Logout</button>
    } else {
      return <button type='button' class="btn btn-outline-success" onClick={login}>Login</button>
    }
  }
}

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  isLoggingIn: auth.isLoggingIn
})

const mapDispatchToProps = {
  login: () => login(config),
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)