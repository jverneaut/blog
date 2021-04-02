import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <div className="header">
    <div className="container">
      <Link to="/" className="logo">
        <span>
          <strong>Blog</strong> – Julien Verneaut
        </span>
      </Link>
    </div>
  </div>
);

export default Header;
