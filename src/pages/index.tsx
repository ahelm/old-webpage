import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
      Hi, I'm{" "}
      <span
        style={{
          backgroundColor: "rgb(82, 131, 216)",
          padding: "0.1rem 0.5rem",
          color: "white",
        }}
      >
        Anton
      </span>
    </div>
    <p>
      I am a Ph.D. graduate in plasma physics at Instituto Superior Técnico.
      Welcome to my webpage, and from time to time, I will try to post some tech
      content here on my blog. Make sure to check it out.
    </p>
  </Layout>
);

export default AboutPage;
