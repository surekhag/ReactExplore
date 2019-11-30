import React, { Component } from 'react';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';
import leftArrow from '../../Assets/Images/left-arrow.png';
import rightArrow from '../../Assets/Images/right-arrow.png';
import './Carousal.scss';

class Carousal extends Component {
  imageClick = e => {
    if (e.id === 'right') {
      document.getElementById('cardsCarousal').scrollLeft += 276;
    }
    if (e.id === 'left') {
      document.getElementById('cardsCarousal').scrollLeft -= 276;
    }
  };
  render() {
    return (
      <div className="cardsContainerCourasal">
        <div className="arrow">
          <span>
            <img
              id="left"
              className="leftArrow"
              src={leftArrow}
              onClick={event => this.imageClick(event.target)}
              alt="Left"
            />
          </span>
        </div>
        <div className="content">
          <FeaturedProductsModule />
        </div>
        <div className="arrow">
          <span>
            <img
              id="right"
              className="rightArrow"
              src={rightArrow}
              onClick={event => this.imageClick(event.target)}
              alt="Right"
            />
          </span>
        </div>
      </div>
    );
  }
}
export default Carousal;
