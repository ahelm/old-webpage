import { Link } from "gatsby";
import React, { CSSProperties } from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import PageLogo from "./logo";

const linkStyle: CSSProperties = {
  textDecoration: "none",
  margin: "0 0.8rem",
};

const activeStyle: CSSProperties = {
  textDecoration: "underline",
};

const Header = () => (
  <header style={{}}>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 760,
        padding: "1.4rem 1.0875rem 1rem",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: "1",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <Link to="/">
          <PageLogo />
        </Link>
      </div>
      <div
        style={{
          flex: "2.3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            <Link to="/" style={linkStyle} activeStyle={activeStyle}>
              About
            </Link>
            <Link to="/latest" style={linkStyle} activeStyle={activeStyle}>
              Latest
            </Link>
            <Link to="/cv" style={linkStyle} activeStyle={activeStyle}>
              CV
            </Link>
          </h1>
          <div
            style={{
              textAlign: "center",
              fontSize: "2em",
            }}
          >
            <a href="https://twitter.com/HelmAnton" aria-label="Twitter">
              <FaTwitter style={{ margin: "10" }} />
            </a>
            <a href="https://github.com/ahelm" aria-label="Github">
              <FaGithub style={{ margin: "10" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/anton-helm/"
              aria-label="Linkedin"
            >
              <FaLinkedin style={{ margin: "10" }} />
            </a>
            <a href="mailto:a.helm87@gmail.com" aria-label="Mail">
              <FaRegEnvelope style={{ margin: "10" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
