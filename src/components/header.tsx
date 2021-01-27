import { Link } from 'gatsby';
import React, { useState } from 'react';
import PageLogo from './logo';

const HeaderLinks = [
  { to: "/", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/projects", text: "Projects" },
  { to: "/cv", text: "Resume" },
]

const DropdownLink = (link: { to: string, text: string }) => (
  <Link to={link.to} className="text-center px-8 py-2 hover:text-blue-400 hover:bg-gray-50 text-lg">{link.text}</Link>
);

const DropDown = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`relative ` + className}>
      <button onClick={() => setOpen(!isOpen)} className="focus:outline-none hover:outline-none">
        <svg className="h-6 w-6 fill-current text-gray-100 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path className={`${isOpen ? '' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          <path className={`${isOpen ? 'hidden' : ''}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className={`${isOpen ? '' : 'hidden'} absolute top-8 right-0 flex flex-col w-48 py-2 rounded-lg bg-white shadow-xl`}>
        {HeaderLinks.map((item, index) => <DropdownLink to={item.to} text={item.text} key={index} />)}

      </div>
    </div>
  )
};

const NavBar = ({ className }: { className: string }) => (
  <nav className={className}>
    {HeaderLinks.map((item, index) => <Link className="text-white text-lg px-6 py-2" to={item.to} key={index} >{item.text}</Link>)}
  </nav>
);

const Header = () => {
  return (
    <header className="p-4 flex flex-row justify-between items-center bg-gray-800 shadow-md">
      <Link to="/">
        <PageLogo />
      </Link>
      <NavBar className="hidden sm:block" />
      <DropDown className="sm:hidden" />
    </header>
  )
};

export default Header;
