import axios from "axios";

export function fetchArtist(artistId) {
  return function(dispatch) {
    dispatch({type: "FETCH_ARTIST", artistId});

    const token = localStorage.getItem('token')

    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    axios.get("https://api.spotify.com/v1/artists/" + artistId, config)
      .then((response) => {        
        dispatch({type: "FETCH_ARTIST_FULFILLED", artistId: artistId, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ARTIST_REJECTED", payload: err})
      })
  }
}