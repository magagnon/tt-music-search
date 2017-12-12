import React, { Component } from "react"

export default class Track extends Component {
  render() {    
    const { name, track_number } = this.props

    return (          
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {track_number}. {name}
      </li>
    );
  }
}