import React from 'react';
import {
  FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="flex flex-col py-2 text-gray-400">
    <div className="flex place-content-center text-sm text-center">
      <div>
        <div>Created with Gatsby and Tailwind CSS</div>
        <div>© Anton Helm</div>
      </div>
    </div>
    <div className="flex flex-row py-2 place-content-center">
      <a href="https://twitter.com/HelmAnton" aria-label="Twitter" className="px-2">
        <FaTwitter className="h-5 w-5" />
      </a>
      <a href="https://github.com/ahelm" aria-label="Github" className="px-2">
        <FaGithub className="h-5 w-5" />
      </a>
      <a href="https://www.linkedin.com/in/anton-helm/" aria-label="Linkedin" className="px-2">
        <FaLinkedin className="h-5 w-5" />
      </a>
      <a href="mailto:a.helm87@gmail.com" aria-label="Mail" className="px-2">
        <FaRegEnvelope className="h-5 w-5" />
      </a>
    </div>
  </footer>
);
export default Footer;
