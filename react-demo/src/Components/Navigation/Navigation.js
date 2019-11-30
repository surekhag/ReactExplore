import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="menu">
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/featured products"> Featured Products </a>
        </li>
        <li>
          <a href="/featured products List"> Featured Products </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
