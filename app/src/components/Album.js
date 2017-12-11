import React, { Component } from "react"

export default class Album extends Component {
   
  render() {
    const { id, name, artists, images, href } = this.props.data;

    return (
      <div class="card">
        <img class="img-responsive" src={images[1].url} alt={name} />
      </div>
    );
  }
}