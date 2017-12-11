import { createStore, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"
import { authMiddleware } from 'redux-implicit-oauth2'
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(
  promise(), 
  thunk, 
  authMiddleware,
  createLogger()
)

export default createStore(reducer, middleware)