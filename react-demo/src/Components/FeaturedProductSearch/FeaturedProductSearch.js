import React, { Component } from 'react';
import axios from 'axios';
import './FeaturedProductSearch.scss';
import Loader from '../Loader/Loader';
import ProductListing from '../ProductListing/ProductListing';

class FeaturedProductSearch extends Component {
  state = {
    productData: null,
    searchText: ''
  };

  componentDidMount() {
    axios({
      url:
        'https://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search?query=%7B%22query%22%3A%22bike%22%2C%22offset%22%3A0%2C%22limit%22%3A20%2C%22sort%22%3A%22new+asc%22%2C%22filter%22%3A%5B%22categories%3ArootCategory%2Fb_equipment%2Fb_cycling-accessories%22%2C%22siteId%3AsiteUS%22%2C%22catalog%3Abepsy_catalog_1%22%2C%22dyn_price_defaultPriceGroup%3A%5B0+TO+*%5D%22%2C%22%7B%21collapse+field%3DproductId%7D%22%5D%2C%22facet%22%3A%7B%22categories%22%3A%7B%22type%22%3A%22terms%22%2C%22field%22%3A%22categories%22%2C%22prefix%22%3A%22rootCategory%2Fb_equipment%2Fb_cycling-accessories%22%2C%22limit%22%3A100%7D%2C%22dyn_price_defaultPriceGroup%22%3A%7B%22type%22%3A%22range%22%2C%22field%22%3A%22dyn_price_defaultPriceGroup%22%2C%22domain%22%3A%7B%22excludeTags%22%3A%22PRICE%22%7D%2C%22start%22%3A0%2C%22end%22%3A7000%2C%22gap%22%3A1000%7D%2C%22type%22%3A%7B%22type%22%3A%22terms%22%2C%22field%22%3A%22type%22%2C%22limit%22%3A100%7D%2C%22brand%22%3A%7B%22type%22%3A%22terms%22%2C%22field%22%3A%22brand%22%2C%22limit%22%3A100%7D%7D%7D',
      headers: {
        'Bepsy-CatalogId': 'bepsy_catalog_1',
        'Bepsy-PricelistId': 'defaultPriceGroup',
        'Bepsy-SiteId': 'siteUS'
      },
      method: 'get'
    }).then(
      response => {
        this.setState({
          productData: response.data.response.records
        });
        return;
      },
      error => {
        console.log(error);
      }
    );
  }

  seachProducts = event => {
    if (event.target.value.length >= 3) {
      this.setState({ searchText: event.target.value });
    } else {
      this.setState({ searchText: '' });
    }
  };

  render() {
    let showProdData = null,
      result = null;
    let searchText = this.state.searchText;
    if (this.state.productData) {
      let productData = this.state.productData;
      if (productData && productData.length > 0) {
        if (searchText.length > 0) {
          result = productData.filter(prod => {
            return (
              prod.compositeProducts[0].EProductMedia.smallTitle
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) != -1
            );
          });
        } else {
          result = this.state.productData;
        }

        showProdData = (
          <div>
            <div className="searchText">
              <input
                placeholder="Enter Product Name"
                onChange={this.seachProducts}
              />
            </div>
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
export default FeaturedProductSearch;
