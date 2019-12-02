import React, { Component } from 'react';
import Card from '../Card/Card';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';

const ProductListing = props => {
  let productList = props.productData.map(value => {
    return (
      <div>
        <Card cardDetails={value} />
      </div>
    );
  });
  return (
    <div className="cardsCarousal">
      <h1 className="heading">Featured Products</h1>
      <div id="cardsCarousal">{productList}</div>
    </div>
  );
};

export default ProductListing;
