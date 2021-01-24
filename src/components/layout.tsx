import React from 'react';
import Header from './header';
import Footer from './footer';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
