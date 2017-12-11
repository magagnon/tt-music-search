export default function reducer(state={
  artists: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_ARTIST": {
      return {...state, fetching: true}
    }
    case "FETCH_ARTIST_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_ARTIST_FULFILLED": {            
      return {
        ...state,
        fetching: false,
        fetched: true,
        artist: action.payload
      }
    }
    case "SEARCH_ARTISTS": {
      return {...state, fetching: true}
    }
    case "SEARCH_ARTISTS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "SEARCH_ARTISTS_FULFILLED": {            
      return {
        ...state,
        fetching: false,
        fetched: true,
        artists: action.payload.artists.items
      }
    }
  }

  return state
}