import {graphql, useStaticQuery} from 'gatsby'

const useImage = (props) => {

  const data = useStaticQuery(graphql`
    query Image {
      images: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        nodes {
          childImageSharp {
            id
            fixed (width: 320, height: 240) {
              src
              ...GatsbyImageSharpFixed_withWebp
            }
            fluid {
              src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return data.images.nodes
}

export default useImage
