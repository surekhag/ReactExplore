import React, { Component } from 'react';
import LoginModule from '../LoginModule/LoginModule';
import FeaturedProductsModule from '../FeaturedProductsModule/FeaturedProductsModule';

class HomeModule extends Component {
    render(){
          return( 
          <div>
            <div>
            <LoginModule />
          </div>
          <div>
            <FeaturedProductsModule />
            </div>
          </div>
         
          )    
    }
}
export default HomeModule;