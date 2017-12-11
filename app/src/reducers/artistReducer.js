export default function reducer(state={
  artist: {},
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
  }

  return state
}