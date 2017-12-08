import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login, logout } from 'redux-implicit-oauth2'

import config from 'config'

const AuthButton = ({ isLoggedIn, login, logout }) => {
  if (isLoggedIn) {
    return <button type='button' onClick={logout}>Logout</button>
  } else {
    return <button type='button' onClick={login}>Login</button>
  }
}

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
})

const mapDispatchToProps = {
  login: () => login(config),
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)