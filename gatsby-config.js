/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteTitle: "Pizza House", // Site title.
    siteTitleShort: "Pizza House", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "Restaurant Pizza House", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://pizzahousemd.netlify.com", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "Restaurant de familie cu bucătărie deliciosă și zona largă pentru copii.", // Website description used for RSS feeds/meta description tag.
    siteFBAppID: "1825356251115265", // FB Application ID for using app insights
    googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    postsPerPage: 4, // Amount of posts displayed per listing page.
    copyright: "Copyright © 2020", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#BF8450", // Used for setting manifest and progress theme colors.
    backgroundColor: "#FFD197" // Used for setting manifest background color.
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      },
    },
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `${__dirname}/src/static/favicon.ico`
      }
    },
    `gatsby-plugin-netlify`
  ],
}
