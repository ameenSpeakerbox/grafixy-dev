/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `grafixy-dev`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/src/images/favicon.svg`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify",
    "gatsby-plugin-typescript",
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
