import React from 'react';
import { Link } from 'gatsby';

import profile from '../../assets/julien-verneaut.jpg';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo">
      <img src={profile} alt="Julien Verneaut" />
      Julien Verneaut
    </Link>
    <div className="nav">
      <Link className="nav__item" to="/">
        Archive
      </Link>
      <Link className="nav__item" to="/definitions">
        Définitions
      </Link>
    </div>
  </div>
);

export default Header;
