import React from 'react';
import { Link } from 'gatsby';

import profile from '../../assets/julien-verneaut.jpg';

const Header = () => (
  <div className="header">
    <div className="container">
      <Link to="/" className="logo">
        <img src={profile} alt="Julien Verneaut" />
        <span>Blog – Julien Verneaut</span>
      </Link>
    </div>
  </div>
);

export default Header;
