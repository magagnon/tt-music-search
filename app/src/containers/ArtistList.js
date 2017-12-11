import React, { Component } from "react"
import { connect } from "react-redux"

import Artist from "../components/Artist"

class ArtistList extends Component {  
  render() {
    const { artists } = this.props
    const mappedArtists = artists.map(artist => <Artist key={artist.id} data={artist} />)
    
    return (
      <div class="container artists-list">
        <div class="row">
          { mappedArtists }
        </div>
      </div>        
    );
  }
}

const mapStateToProps = (store) => {
  return {
    artists: store.artists.artists,
  };
}

export default connect(mapStateToProps)(ArtistList)