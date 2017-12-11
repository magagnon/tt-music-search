import axios from "axios";

export function searchArtists(query) {
  return function(dispatch) {
    dispatch({type: "SEARCH_ARTISTS", query});
    
    const token = localStorage.getItem('token')

    let config = {
      params: {
        q: query,
        type: 'artist',
      },
     
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    axios.get("https://api.spotify.com/v1/search", config)
      .then((response) => {        
        dispatch({type: "SEARCH_ARTISTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "SEARCH_ARTISTS_REJECTED", payload: err})
      })
  }
}