export default function reducer(state={
  albums: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_RELEASES": {
      return {...state, fetching: true}
    }
    case "FETCH_RELEASES_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_RELEASES_FULFILLED": {      
      return {
        ...state,
        fetching: false,
        fetched: true,
        albums: action.payload.albums.items,
      }
    }
  }

  return state
}