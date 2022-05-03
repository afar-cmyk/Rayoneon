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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rayo Neón`,
        short_name: `Rayo Neón`,
        description: `Avisos publicitarios de Neón y Acrilico, en Bogotá y a nivel nacional.`,
        start_url: `/`,
        background_color: `#12151b`,
        theme_color: `#12151b`,
        display: `standalone`,
        cache_busting_mode: 'none',
        // theme_color_in_head: false
        icon: 'src/static/images/iconoLogo.svg',
        icon_options: {
          purpose: `any`
        }
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/index/*`,
          `/404/*`,
          `/contacto/*`,
          `/productos/*`,
          `/portafolio/*`
        ],
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|\.webm$|\.woff$|\.woff2$|\.svg$)/,
              handler: `StaleWhileRevalidate`
            }
          ]
        }
      }
    }
  ]
}
