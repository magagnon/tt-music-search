import axios from "axios";

export function fetchAlbums(artistId) {
  return function(dispatch) {
    dispatch({type: "FETCH_ALBUMS", artistId: artistId});

    const token = localStorage.getItem('token')

    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    axios.get("https://api.spotify.com/v1/artists/:artistId/albums".replace(":artistId", artistId), config)
      .then((response) => {        
        dispatch({type: "FETCH_ALBUMS_FULFILLED", artistId: artistId, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ALBUMS_REJECTED", payload: err})
      })
  }
}