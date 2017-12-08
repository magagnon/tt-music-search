import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import { authReducer as auth} from 'redux-implicit-oauth2'

import newReleases from "./newReleaseReducer"

export default combineReducers({
  newReleases,
  auth,
  routing: routerReducer
})