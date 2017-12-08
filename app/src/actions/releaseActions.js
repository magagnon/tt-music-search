import axios from "axios";

export function fetchReleases(token) {
  return function(dispatch) {
    dispatch({type: "FETCH_RELEASES"});

    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    axios.get("https://api.spotify.com/v1/browse/new-releases", config)
      .then((response) => {
        dispatch({type: "FETCH_RELEASES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_RELEASES_REJECTED", payload: err})
      })
  }
}