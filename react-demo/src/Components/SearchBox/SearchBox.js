import React, { Component } from 'react';

class SearchBox extends Component {
  handleSearch = event => {
    this.props.seachProducts(event);
  };

  render() {
    return (
      <div className="searchText">
        <input placeholder="Enter Product Name" onChange={this.handleSearch} />
      </div>
    );
  }
}
export default SearchBox;
