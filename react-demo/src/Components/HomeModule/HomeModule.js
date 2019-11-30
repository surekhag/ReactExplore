import React from 'react';
import LoginModule from '../LoginModule/LoginModule';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';
import Navigation from '../Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';

const HomeModule = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/login" component={LoginModule} />
        <Route path="/featured products" component={FeaturedProductsModule} />
      </BrowserRouter>
    </div>
  );
};

export default HomeModule;
