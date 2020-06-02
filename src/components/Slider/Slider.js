import React from 'react'
import Carousel from 'nuka-carousel'
import Img from 'gatsby-image'

import './Slider.css'
import Card from '../Card'
import useImage from '../../hooks/useImage'
import useWindowWidth from '../../hooks/useWindowWidth'


const Slider = (props) => {
  const nodes = useImage()
  const width = useWindowWidth()
  

  return (
    <div className='Slider'>
      <h3>{width}</h3>
      <Carousel slidesToShow={2} slidesToScroll={1} cellAlign='center' renderBottomCenterControls={() => false} swiping={true}>
        {
          nodes.map(image => (
            <Card key={image.childImageSharp.id}>
              <Img style={{borderRadius: '5px'}} fixed={image.childImageSharp.fixed} />
            </Card>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Slider
