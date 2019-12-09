import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="menu">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/featured products"> Featured Products </a>
        </li>
        <li>
          <a href="/featured products List"> Featured Products Listing </a>
        </li>
        <li>
          <a href="/searchProduct"> Search Page </a>
        </li>
        <li>
          <a href="/productData"> ProdData Page </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
