import React from 'react';
import LoginModule from '../LoginModule/LoginModule';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';
import Navigation from '../Navigation/Navigation';
import Carousal from '../Carousal/Carousal';
import { BrowserRouter, Route } from 'react-router-dom';

const HomeModule = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={LoginModule} />
        <Route path="/featured products" component={Carousal} />
        <Route
          path="/featured products List"
          component={FeaturedProductsModule}
        />
      </BrowserRouter>
    </div>
  );
};

export default HomeModule;
