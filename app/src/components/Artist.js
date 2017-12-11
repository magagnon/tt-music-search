import React, { Component } from "react"
import { Link } from "react-router-dom"
import spotifyLogo from "../../public/spotify.png"

class ArtistImage extends Component {
  render () {
    const { name } = this.props
    let url = this.props.url

    if (url == undefined)
      url = spotifyLogo
    
    return <img src={url} class="card-artist-img" width="160" height="160"/>    
  } 
}

export default class Artist extends Component {
  render() {
    const { id, name, images } = this.props.data
    
    const smallImage = images.filter((image) => { return image.width >= 120 && image.width <= 300 })[0]
    const mediumImage = images.filter((image) => { return image.width >= 300 && image.width <= 600 })[0]

    return (
      <div class="col-6 card-artist">             
        <div class="row">
          <div class="col-4">
            <Link to={"/artists/" + id + "/albums"}>
              <ArtistImage name={name} {... mediumImage} />
            </Link>
          </div>

          <div class="col-8">
            <Link to={"/artists/" + id + "/albums"}>
              {name}
            </Link> 
          </div>
        </div>
      </div> 
    );
  }
}
