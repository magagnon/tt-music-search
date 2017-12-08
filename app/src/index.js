import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Provider } from "react-redux"

import Layout from "./containers/Layout"

import store from "./store"

import './theme.css'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Layout />
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
);