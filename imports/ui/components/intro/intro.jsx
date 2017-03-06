import React, { Component } from 'react';


// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  centerBox() {
    $('.center-box').css({
       position:'absolute',
       left: ($(window).width() - $('.center-box').outerWidth())/2,
       top: ($('#intro').height() - $('.center-box').outerHeight())/2
     });
  }
  componentDidMount(){

  }

  render() {
    return (
      <div id="intro" className="row">
        <video playsInline autoPlay muted loop poster="" id="bgvid">
          <source src="/videos/fakenews.mp4" type="video/mp4" />
        </video>

        <div className="col-sm-12 col-md-12">
          <div className="center-box col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1">
            <p className="intro-header"><span className="red-f">F</span>ake News</p>

            <h1 className="intro-text">
              <hr className="center-rule" />
              The Donald Trump Take Down
              <hr className="center-rule" />
            </h1>

            <p className="intro-text col-sm-12 col-sm-offset-0 col-md-6 col-md-offset-3">
              Lorem ipsum bibbity bobbity boo
              Lorem ipsum bibbity bobbity boo
              Lorem ipsum bibbity bobbity boo
            </p>
            <a id="enter-btn" className="col-sm-12 col-md-4 col-md-offset-4" href="#">
              Explore the Evidence
            </a>
          </div>
      </div>
      <footer className="navbar navbar-default navbar-fixed-bottom" id="footer">
        <div className="container">
          footer
        </div>
      </footer>
    </div>
    );
  }
}
