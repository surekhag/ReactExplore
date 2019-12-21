import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';

const HeaderLayoutHoc = WrappedComponent => {
  class HOC extends Component {
    render() {
      return (
        <div>
          <Navigation />
          <WrappedComponent />
        </div>
      );
    }
  }
  return HOC;
};
export default HeaderLayoutHoc;
