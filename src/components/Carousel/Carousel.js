import React from 'react'
import Slider from "react-slick"
import { NextArrow, PrevArrow } from './Arrows'
import useResponsiveSlides from '../../hooks/useResponsiveSlides'

import "./slick-styles/slick.css"
import "./slick-styles/slick-theme.css"
import styles from './Carousel.module.css'

const Carousel = (props) => {
  const {slides} = useResponsiveSlides()
  const settings = {
    speed: 500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    slidesToShow: slides < props.children.length ? slides : props.children.length,
    slidesToScroll: slides < props.children.length ? slides : props.children.length,
    infinite: true,
  }

  return (
    <div className={styles.container}>
      <p id={props.id} className={styles.heading}>{props.title}</p>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}

export default Carousel
