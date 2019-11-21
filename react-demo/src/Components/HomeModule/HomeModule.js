import React, { Component } from 'react';
import LoginModule from '../LoginModule/LoginModule';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';

class HomeModule extends Component {
  render() {
    return (
      <div>
        {/* <LoginModule /> */}
        <FeaturedProductsModule />
      </div>


    )
  }
}
export default HomeModule;