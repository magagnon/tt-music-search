import React, { Component } from 'react'

import ArtistList  from "./ArtistList"
import Search  from "../components/Search"

export default class SearchPage extends Component {

  render() {
    return (
      <main role="main"> 
        <Search />
        <ArtistList />  
      </main>     
    )
  }
};