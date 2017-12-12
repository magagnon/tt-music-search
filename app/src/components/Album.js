import React, { Component } from "react"
import { Collapse, Button, Well, Card, CardBody } from 'reactstrap';

import TrackList from "../containers/TrackList"

export default class Album extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false, hasLoadedTracks: false }
  } 

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {
    const { id, name, images, href } = this.props.album
  
    return (
      <div class="card">        
        <img class="img-responsive" src={images[1].url} alt={name} />

        <p class="text-center">{name}</p> 
        <p class="text-center"><Button onClick={this.toggle} class="btn btn-outline-info" style={{ marginBottom: '1rem' }}>Show Tracks</Button></p>
        
        <Collapse isOpen={this.state.collapse}>
          <TrackList albumId={id} isOpen={this.state.collapse} />
        </Collapse>
      </div>
    );
  }
}