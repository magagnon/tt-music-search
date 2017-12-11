import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import { authReducer as auth} from 'redux-implicit-oauth2'

import albums from "./albumsReducer"
import artist from "./artistReducer"
import artists from "./artistsReducer"
import newReleases from "./newReleasesReducer"

export default combineReducers({
  auth,
  albums,
  artist,
  artists,
  newReleases,
  routing: routerReducer
})