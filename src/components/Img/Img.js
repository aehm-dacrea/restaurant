import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

export default (props) => {
  const data = useStaticQuery(graphql`
    query Images {
      topCarousel: file(relativePath: {eq: "6-Amazing-Food-Photography-Tricks-You-Need-To-Know-Gobo-Pasta.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img {...props} fluid={data.topCarousel.childImageSharp.fluid} />
  )
}
