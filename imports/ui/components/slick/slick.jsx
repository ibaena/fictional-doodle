import React, { Component } from 'react';


// Intro component
export default class Slick extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }



  componentDidMount(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    })
  }

  render() {
    return (
    <div id="slick-slider" className="row">
      <div  className="slider-for">
      <div><img src="http://placehold.it/600x401" className="featured-video"/></div>
      <div><img src="http://placehold.it/600x402" className="featured-video"/></div>
      <div><img src="http://placehold.it/600x403" className="featured-video"/></div>
      <div><img src="http://placehold.it/600x404" className="featured-video"/></div>
      <div><img src="http://placehold.it/600x405" className="featured-video"/></div>
      <div><img src="http://placehold.it/600x406" className="featured-video"/></div>
      </div>
      <div  className="slider-nav">
        <div><img src="http://placehold.it/300x151" className="nav-video" /></div>
        <div><img src="http://placehold.it/300x152" className="nav-video" /></div>
        <div><img src="http://placehold.it/300x153" className="nav-video" /></div>
        <div><img src="http://placehold.it/300x154" className="nav-video" /></div>
        <div><img src="http://placehold.it/300x155" className="nav-video" /></div>
        <div><img src="http://placehold.it/300x156" className="nav-video" /></div>
      </div>

    </div>
    );
  }
}
