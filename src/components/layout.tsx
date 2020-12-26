import React from 'react';
import Header from './header';
import './layout.css';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1.0875rem 1.45rem',
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          margin: '2.2rem 0 0',
          textAlign: 'center',
          fontSize: '0.8rem',
        }}
      >
        Site created using
        {' '}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
        {' '}
        <br />
        &copy; Anton Helm
      </footer>
    </div>
  </>
);

export default Layout;
