import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle,
            siteTitleShort,
            siteTitleAlt,
            siteLogo,
            siteUrl,
            pathPrefix,
            siteDescription,
            siteFBAppID,
            googleAnalyticsID,
            dateFromFormat,
            dateFormat,
            postsPerPage,
            copyright,
            themeColor,
            backgroundColor,
          }
        }
      }
    `
  )
  return site.siteMetadata
}