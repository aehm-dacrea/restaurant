import React from 'react'
import Slider from "react-slick"
import {NextArrow, PrevArrow} from './Arrows'
import useResponsiveSlides from '../../hooks/useResponsiveSlides'
import Card from '../Card'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './Carousel.module.css'
import './Carousel.css'

const Carousel = (props) => {
  const {slides} = useResponsiveSlides()
  const settings = {
    speed: 500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    slidesToShow: slides,
    slidesToScroll: slides,
    infinite: true,
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Горячие Блюда</p>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}

export default Carousel
