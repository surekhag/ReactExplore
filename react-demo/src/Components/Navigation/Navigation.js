import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="menu">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/featured products">Featured Products </Link>
        </li>
        <li>
          <Link to="/featured products List"> Featured Products Listing</Link>
        </li>
        <li>
          <Link to="/productData">Search Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
