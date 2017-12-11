import React, { Component } from "react";
import { connect } from "react-redux"

import { fetchReleases } from "../actions/releaseActions"

import Album from "../components/Album"

@connect((store) => {  
  return {
    isLoggedIn: store.auth.isLoggedIn,
    newReleases: store.newReleases,
  };
})

export default class NewReleases extends Component {
  componentWillMount() {
    this.props.dispatch(fetchReleases())
  }
  
  render() {
    const { newReleases } = this.props;
    const mappedReleases = newReleases.albums.map(album => <Album key={album.id} data={album}/>)
    
    return (
      <main role="main">
        <div class="album text-muted">
          <div class="container">
            <h2>New Releases</h2>
            <div class="row">
              { mappedReleases }
            </div>
          </div>    
        </div>    
      </main>
    );
  }
}