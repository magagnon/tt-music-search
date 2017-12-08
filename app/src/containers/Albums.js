import React, { Component } from "react";
import { connect } from "react-redux"

import { fetchReleases } from "../actions/releaseActions"

import Album from "../components/Album"

@connect((store) => {  
  return {
    token: store.auth.token,
    isLoggedIn: store.auth.isLoggedIn,
    albums: store.albums,
  };
})

export default class Albums extends Component {
  componentWillMount() {
    // this.props.dispatch(fetchReleases(this.props.token))
  }
  
  render() {
    const { albums, artistId } = this.props;
    // const albumList = albums.map(album => <Album key={album.id} data={album}/>)
    
    return (
      <main role="main">
        <div class="album text-muted">
          <div class="container">
            <div class="row">
              <p>This is an album list</p>
            </div>
          </div>    
        </div>    
      </main>
    );
  }
}