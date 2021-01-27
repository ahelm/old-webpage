import React from 'react';
import Header from './header';
import Footer from './footer';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <div className="flex justify-around min-h-screen bg-gray-100">
      <div className="bg-gray-50 flex-auto antialiased max-w-screen-lg shadow-xl">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
