import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { fetchAlbums } from "../actions/albumActions"
import { fetchArtist } from "../actions/artistActions"

import Album from "../components/Album"

class AlbumList extends Component {
  
  componentWillMount() {
    this.props.dispatch(fetchAlbums(this.props.artistId))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.artistId != nextProps.artistId) {
      this.props.dispatch(fetchAlbums(nextProps.artistId))
    } 
  }

  getArtistName() {
    const album = this.props.albums[0]

    if (album != undefined) {
      const artist = album.artists[0]
      return artist.name
    }    
  }

  render() {
    const albumList = this.props.albums.map(album => <Album key={album.id} data={album}/>)
    
    return (
      <main role="main">
        <div class="album text-muted">
          <div class="container">
            <h2>{this.getArtistName()}</h2>
            <div class="row">
              {albumList}
            </div>
          </div>    
        </div>    
      </main>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    isLoggedIn: store.auth.isLoggedIn,
    albums: store.albums.albums,
    artist: store.artist.artist,
    artistId: ownProps.match.params.artistId
  };
}

export default connect(
  mapStateToProps
)(AlbumList)