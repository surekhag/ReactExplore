import React from 'react';
import LoginModule from '../LoginModule/LoginModule';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HeaderLayoutHoc from '../HeaderLayoutHoc/HeaderLayoutHoc';

const HomeModule = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path="/login" component={HeaderLayoutHoc(LoginModule)} />
        <Route
          path="/featured products"
          component={HeaderLayoutHoc(FeaturedProductsModule)}
        />
      </BrowserRouter>
    </div>
  );
};

export default HomeModule;
