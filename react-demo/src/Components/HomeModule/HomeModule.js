import React from 'react';
import LoginModule from '../LoginModule/LoginModule';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';
import ProductListing from '../ProductListing/ProductListing';
import ProductSearchHOC from '../ProductSearchHOC/ProductSearchHOC';
import Navigation from '../Navigation/Navigation';
import SearchBox from '../SearchBox/SearchBox';
import Carousal from '../Carousal/Carousal';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ProductData from '../ProductData/ProductData';

const HomeModule = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={LoginModule} />
        <Route path="/featured products" component={Carousal} />
        <Route
          path="/featured products List"
          component={FeaturedProductsModule}
        />
        <Route
          path="/searchProduct"
          component={ProductSearchHOC(ProductListing, SearchBox)}
        />
        <Route path="/productData" component={ProductData} />
      </BrowserRouter>
    </div>
  );
};

export default HomeModule;
