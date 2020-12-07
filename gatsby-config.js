module.exports = {
  siteMetadata: {
    title: "ahelm.github.io",
    description: "Personal webpage of Anton Helm",
    author: "Anton Helm",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ahelm.github.io",
        short_name: "ahelm.github.io",
        start_url: "/",
        background_color: "#202124",
        theme_color: "#202124",
        display: "browser",
        icon: "src/images/ahelm-icon.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-twitter",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};
