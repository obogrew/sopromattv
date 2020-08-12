import React from 'react';
import videojs from 'video.js'


export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });

  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
	<div class="wrapper"> 
        <div data-vjs-player data-cast-api-enabled="true" class="videocontent">
          <video  ref={ node => this.videoNode = node } className="video-js vjs-default-skin vjs-16-9"></video>
        </div>
	</div>


    )
  }
}