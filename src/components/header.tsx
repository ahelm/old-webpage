import { Link } from 'gatsby';
import React from 'react';
import PageLogo from './logo';

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <PageLogo />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cv">CV</Link>
      </div>
    </div>
  </header>
);

export default Header;
