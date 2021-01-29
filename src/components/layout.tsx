import React from 'react';
import Header from './header';
import Footer from './footer';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <div className="flex justify-around min-h-screen bg-gray-100">
      <div className="flex-auto antialiased max-w-screen-lg shadow-xl bg-gray-50">
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Layout;
