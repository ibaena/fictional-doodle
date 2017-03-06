import React, { Component } from 'react';


// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  muteVideo() {
    mute = true;
    $('.volume-item').on('click', function() {
      mute = !mute;
      if(mute === true){
        $('#vol-off').removeClass('v-off');
        $('#vol-on').addClass('v-off');
      }else {
        $('#vol-on').removeClass('v-off');
        $('#vol-off').addClass('v-off');
      }
      $('video').prop('muted', !$('video').prop('muted'));
    })
  }
  moveBack() {
    $('body').mousemove(function(e){
      console.log("me");
        var amountMovedX = (e.pageX * -1 / 6);
        var amountMovedY = (e.pageY * -1 / 6);
        $('video').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });
  }
  componentDidMount(){
    this.muteVideo();
    this.moveBack();
  }

  render() {
    return (
      <div id="intro" className="row">

        <ul className="vol-list" id="sound-control">
          <li id="sound-title">Sound</li>
          <li className="volume-item v-off" id="vol-on">ON</li>
          <li className="volume-item " id="vol-off">OFF</li>
        </ul>
        <video playsInline autoPlay muted loop poster="" id="bgvid">
          <source src="/videos/fakenews-long.mp4" type="video/mp4" />
        </video>

        <div className="col-sm-12 col-md-12">

          <div className="center-box col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1">
            <p className="intro-header"><span className="red-f">F</span>ake News</p>

            <h1 className="intro-text">
              <hr className="center-rule" />
              The Donald Trump Take Down
              <hr className="center-rule" />
            </h1>

            <p className="intro-text col-sm-12 col-sm-offset-0 col-md-6 col-md-offset-3" id="sub-head">
              The power of propaganda is to say something enough times that it becomes the Big Lie.
            </p>
            <a id="enter-btn" className="col-sm-12 col-md-4 col-md-offset-4" href="/explore">
              Explore the Evidence
            </a>
          </div>
      </div>
      <footer className="navbar navbar-default navbar-fixed-bottom" id="footer">
        <div className="container-fluid">
          <div className="col-sm-12 col-md-6"id="left-footer">
            LEFT
          </div>
          <div className="col-sm-12 col-md-6"id="right-footer">
            RIGHT
          </div>
        </div>
      </footer>
    </div>
    );
  }
}
