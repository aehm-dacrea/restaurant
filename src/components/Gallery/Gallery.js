import React from 'react'
import Img from 'gatsby-image'

import useImage from '../../hooks/useImage'

const Gallery = () => {
  const nodes = useImage()

  return(
    <div>
      {nodes.map(image => (
        <Img key={image.childImageSharp.id} fluid={image.childImageSharp.fluid}/>
      ))}
    </div>
  )
}

export default Gallery
