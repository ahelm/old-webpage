import React from 'react';
import {
  FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter,
} from 'react-icons/fa';

const Footer = () => (
  <footer>
    <a href="https://twitter.com/HelmAnton" aria-label="Twitter">
      <FaTwitter />
    </a>
    <a href="https://github.com/ahelm" aria-label="Github">
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/anton-helm/"
      aria-label="Linkedin"
    >
      <FaLinkedin />
    </a>
    <a href="mailto:a.helm87@gmail.com" aria-label="Mail">
      <FaRegEnvelope />
    </a>
  </footer>
);
export default Footer;
