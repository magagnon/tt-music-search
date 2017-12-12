import React, { Component } from 'react'
import { connect } from "react-redux"

import { searchArtists } from "../actions/searchActions"

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "", // my search query
    }
  }

  onKeyDownHandler(event) {
    // enter has keyCode = 13
    if (event.keyCode == 13) {      
      this.props.searchArtists(this.state.query)
      return false
    }  
  }

  render() {

    let artist = {
      name: ''
    };

    if (this.state.artist !== null) {
      artist = this.state.artist;
    }

    return ( 
      <div class="container"> 
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">          
          <input type="text" class="form-control" id="inlineFormInputGroupUsername2" 
          placeholder="Search Artists Ex: Muse"  onChange={event => { this.setState({ query: event.target.value }) }} onKeyDown={event => { this.onKeyDownHandler(event) }} />    
        </div>  
      </div>  
    )
  }
};

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  searchArtists
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)