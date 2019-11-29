import React from 'react';
import './Card.css';

function card(props) {
  console.log('inside card', props);
  return (
    <div className="cardContainer">
      <div>
        <div className="imageContainer">
          <img
            src={props.cardDetails.compositeProducts[0].EProductMedia.smallURI}
            alt="Login Page"
          ></img>
          <div className="prodInfo">
            <span>
              {props.cardDetails.compositeProducts[0].EProductMedia.smallTitle}
            </span>
          </div>
          <div className="prodId">
            <span>Part #: </span>
            <span>{props.cardDetails.SKU}</span>
          </div>
          <div className="prodPrice">
            $ {props.cardDetails.compositeProducts[0].priceEntry.listPrice}
          </div>
          <div>
            <button className="cardButton">Add to Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
