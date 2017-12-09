import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import { authReducer as auth} from 'redux-implicit-oauth2'

import albums from "./albumsReducer"
import newReleases from "./newReleasesReducer"

export default combineReducers({
  albums,
  newReleases,
  auth,
  routing: routerReducer
})