/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `grafixy-dev`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/src/images/favicon.png`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `84fa7l4gis5w`,
        accessToken: "y4IABEz6W4Dh1RHyzq37Hn6h5BTHfogJlxaiNRCpns4",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `/src/images/favicon.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/src/images/favicon.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/src/images/favicon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/src/images/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
