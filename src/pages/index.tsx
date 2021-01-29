import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
`);
  return (
    <Layout>
      <SEO title="About" />
      <div className="p-4">
        <div className="flex flex-col sm:flex-row-reverse">
          <div className="px-4 pb-4 flex justify-around">
            <Img fixed={data.file.childImageSharp.fixed} alt="Profile picture" />
          </div>
          <div className="prose">
            <h1>
              Hello
              <span role="img" aria-label="hand-hi">👋</span>
            </h1>
            <p>

              My name is Anton, and I have a Ph.D. in physics. I have been using
              large supercomputers to model the interaction between intense laser
              pulses and plasmas in the past years. It led me to develop numerical
              models to run on a large number of computers.

            </p>
            <p>

              I can characterize my interest as everything tech. During the time in
              academia, I acquired a deep knowledge of computer architectures,
              including GPUs. I also adore Python as it allows me to quickly and
              programmatically solve problems at any scale. I am currently getting
              into deep learning and exploring all the possible angles of using it. I
              also really like the math behind it as it is quite interesting to model
              and connects to my previous work, using computers as big calculators.

            </p>
            <p>

              Make sure to check out my
              {' '}
              <Link to="/blog">blog</Link>
              {' '}
              and my
              {' '}
              <Link to="/projects">projects</Link>
              {' '}
              to follow up on my progress.

            </p>
          </div>
        </div>
        {/*
        <div></div>
        <Img fluid={data.file.childImageSharp.fluid} alt="Profile picture" />
        <p>

          My name is Anton, and I have a Ph.D. in physics. I have been using
          large supercomputers to model the interaction between intense laser
          pulses and plasmas in the past years. It led me to develop numerical
          models to run on a large number of computers.

        </p>
        <p>

          I can characterize my interest as everything tech. During the time in
          academia, I acquired a deep knowledge of computer architectures,
          including GPUs. I also adore Python as it allows me to quickly and
          programmatically solve problems at any scale. I am currently getting
          into deep learning and exploring all the possible angles of using it. I
          also really like the math behind it as it is quite interesting to model
          and connects to my previous work, using computers as big calculators.

        </p>
        <p>

          Make sure to check out my <Link to="/blog">blog</Link> and my
          <Link to="/projects">projects</Link> to follow up on my progress.

        </p> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
