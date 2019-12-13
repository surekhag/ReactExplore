import React, { Component } from 'react';
import axios from 'axios';
import './ProductSearchHOC.scss';
import Loader from '../Loader/Loader';

const ProductSearchHOC = (ProductListing, SearchBox, productData1) => {
  class HOC extends Component {
    state = {
      searchText: ''
    };

    seachProducts = event => {
      if (event.target.value.length >= 0) {
        this.setState({ searchText: event.target.value });
      } else {
        this.setState({ searchText: '' });
      }
    };

    filterProducts = searchTerm => {
      let result = null;
      if (searchTerm.length > 0) {
        result = this.props.productData.filter(prod => {
          return (
            prod.compositeProducts[0].EProductMedia.smallTitle
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) != -1
          );
        });
      } else {
        result = this.props.productData;
      }
      return result;
    };

    render() {
      let showProdData = null,
        productData = null;
      let searchText = this.state.searchText;
      let result = this.filterProducts(searchText);

      if (this.props.productData) {
        productData = this.props.productData;
        if (productData && productData.length > 0) {
          result = this.filterProducts(searchText);
          showProdData = (
            <div>
              <SearchBox seachProducts={this.seachProducts} />
              <ProductListing productData={result} />
            </div>
          );
        }
      } else {
        showProdData = (
          <div className="loader">
            <Loader />
          </div>
        );
      }
      return <div className="cardsContainer">{showProdData}</div>;
    }
  }
  return HOC;
};

export default ProductSearchHOC;
