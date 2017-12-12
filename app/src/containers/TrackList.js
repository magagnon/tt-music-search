import React, { Component } from "react"
import axios from "axios"
import Track from "../components/Track"

class TrackDisk extends Component {
  render () {
    const { disc_number } = this.props
    
    if (disc_number != undefined) {
      return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Disc: {disc_number}
        </li>  
      )
    }
    else {
      return null 
    }
  }
}

export default class TrackList extends Component {  
  constructor(props) {
    super(props)

    this.state = { 
      tracks: []
    }    
  } 
  
  // Load tracks when state changes
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isOpen == true && nextState.tracks.length == 0) {
      this.fetchAlbumTracks()
    }
  }

  fetchAlbumTracks() {
    const { albumId } = this.props
    const token = localStorage.getItem('token')
    
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    axios.get("https://api.spotify.com/v1/albums/" + albumId + "/tracks", config)
      .then((response) => { 
        this.setState({tracks: response.data.items})       
      })
      .catch((err) => {
        this.setState({tracks: []}) 
      })
  }

  render() {    
    const { tracks } = this.state
    const firstTrack = tracks[0] || {}

    const mappedTracks = tracks.map(track => <Track key={track.id} name={track.name} track_number={track.track_number} />)

    return (
      <ul class="list-group">
        <TrackDisk disc_number={firstTrack.disc_number} />
        { mappedTracks }
      </ul>
    );
  }
}