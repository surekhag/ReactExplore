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
      </ul>
      <span class="userName">Display USERNAME here</span>
    </div>
  );
};

export default Navigation;
