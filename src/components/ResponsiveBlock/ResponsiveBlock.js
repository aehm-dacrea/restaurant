import React from 'react'
import Carousel from '../Carousel'
import Grid from '../Grid'

import useWindowWidth from '../../hooks/useWindowWidth'

const ResponsiveBlock = (props) => {
  const width = useWindowWidth()

  if (width < 400) {
    return (
      <Grid onClick={props.clickHandler}>
        {props.mapImages({height: 100, width: 100})}
      </Grid>
    )
  } else {
    return (
      <Carousel onClick={props.clickHandler}>
        {props.mapImages({})}
      </Carousel>
    )
  }
}

export default ResponsiveBlock
