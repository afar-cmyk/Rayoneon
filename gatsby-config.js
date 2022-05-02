module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Rayoneon'
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
      __key: 'images'
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/index/*`,
          `/404/`,
          `/contacto/`,
          `/productos/*`,
          `/portafolio/`
        ]
      },
      workboxConfig: {
        globPatterns: ['**/*/.{css,woff,woff2,webm}']
      }
    }
  ]
}
