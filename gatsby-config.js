module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Rayoneon'
  },
  plugins: [
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Baloo 2:600`,
          `Assistant:300,400,600,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
}

// 'gatsby-transformer-sharp',
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         name: 'images',
//         path: './src/images/'
//       },
//       __key: 'images'
//     },
