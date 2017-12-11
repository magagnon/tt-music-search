import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { fetchAlbums } from "../actions/albumActions"
import { fetchArtist } from "../actions/artistActions"

import Album from "../components/Album"

class AlbumList extends Component {
  
  componentWillMount() {
    this.props.dispatch(fetchArtist(this.props.artistId))
    this.props.dispatch(fetchAlbums(this.props.artistId))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.artistId != nextProps.artistId) {
      this.props.dispatch(fetchArtist(this.props.artistId))
      this.props.dispatch(fetchAlbums(nextProps.artistId))
    } 
  }

  render() {
    const albumList = this.props.albums.map(album => <Album key={album.id} data={album}/>)
    
    return (
      <main role="main">
        <div class="album text-muted">
          <div class="container">
            <h2>{this.props.artist.name}</h2>
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