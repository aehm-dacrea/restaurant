import {graphql, useStaticQuery} from 'gatsby'

const useImage = (props) => {

  const data = useStaticQuery(graphql`
    query Image {
      images: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        nodes {
          childImageSharp {
            id
            fixed (width: 320, height: 240, quality: 70, cropFocus: CENTER) {
              src
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      desktop: file(relativePath: {eq: "bg_wood.jpg"}) {
        childImageSharp {
          fluid (quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return {nodes: data.images.nodes, desktop: data.desktop}
}

export default useImage
