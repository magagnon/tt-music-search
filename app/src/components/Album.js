import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Album extends Component {
   
  render() {
    const { id, name, artists, images, href } = this.props.data;

    return (
      <div class="card">
        <img class="img-responsive" src={images[1].url} alt={name} />
        {/* <p class="card-text">ID: {id}</p>
        <p class="card-text">Name: {name}</p>
        <ul>
          {
            artists.map(function(artist, index){
              return <li key={ index }>{artist.name}</li>;
            })
          } 
        </ul> */}
      </div>
    );
  }
}