import React, { useEffect } from 'react'
import Slider from "react-slick"
import { NextArrow, PrevArrow } from './Arrows'
import useResponsiveSlides from '../../hooks/useResponsiveSlides'

import Card from '../Card'
import Img from 'gatsby-image'

import "./slick-styles/slick.css"
import "./slick-styles/slick-theme.css"
import styles from './Carousel.module.css'

const areEqual = (prevProps, nextProps) => {
  for (const [key, value] of Object.entries(prevProps)) {
    if (nextProps[key] !== value) {
      console.log(value)
    }
  }
  // if (prevProps === nextProps) {
  //   console.log('props are equal')
  // } else {
  //   console.log(prevProps)
  //   console.log(nextProps)
  // }
}

const Carousel = (props) => {
  const {slides} = useResponsiveSlides()
  const settings = {
    speed: 500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
  }
  useEffect(() => {
    console.log(`[Carousel] ${props.title}`)
  })

  const mapCards = (category, size = {}) => {
    const imgArray = []
    category[0].nodes.map(node => imgArray.push(node.foto.localFile.childImageSharp.fixed))
    return category[1].nodes.map((node, index) => (
      <Card
        key={node.id} 
        id={node.id} 
        img={imgArray[index]} 
        onClick={props.onClick}
        name={node.name}
        weight={node.weight}
        price={node.price}
        oldPrice={node.oldPrice}
        alt={node.alt}
        composition={node.composition}
      >
        <Img 
          key={node.id} 
          style={{borderRadius: '5px'}} 
          alt={node.alt} 
          fixed={{...imgArray[index], ...size}}
        />
      </Card>
    ))
  }

  return (
    <div className={styles.container}>
      <p id={props.id} className={styles.heading}>{props.title}</p>
      <Slider {...settings}>
        {mapCards(props.category)}
      </Slider>
    </div>
  )
}

export default React.memo(Carousel)
