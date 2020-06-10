import React, { useState, useEffect } from "react"
import Img from 'gatsby-image'
import { Transition } from 'react-transition-group'
import useImage from '../hooks/useImage'
import useWindowWidth from '../hooks/useWindowWidth'

import Layout from '../layout/index'
import TopNavbar from "../components/TopNavbar/TopNavbar"
import FullCard from '../components/Card/FullCard'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import MenuNavbar from '../components/MenuNavbar'
import Heading from '../components/Heading'
import WelcomeScreen from '../components/WelcomeScreen'

export default function Home() {
  const {nodes} = useImage()
  const [width, setWidth] = useState(null)
  let windowWidth = useWindowWidth()
  useEffect(() => {
    setWidth(windowWidth)
  }, [])
  const [cardClicked, setCardClicked] = useState({id: null, clicked: false})
  const [img, setImg] = useState(null)
  const clickHandler = (id, img) => {
    setCardClicked({id: id, clicked: true})
    setImg(img)
  }
  const closeBackdrop = () => {
    setCardClicked({...cardClicked, clicked: false})
  }
  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  }

  const mapImages = (size = {}) => {
    return nodes.map(image => (
      <Img 
      key={image.childImageSharp.id}
        style={{borderRadius: '5px'}} 
        fixed={{...image.childImageSharp.fixed, ...size}} 
      />
    ))
  }

  const carousel = <Carousel onClick={clickHandler}>{mapImages()}</Carousel>
  const grid = <Grid onClick={clickHandler}>{mapImages({height: 100, width: 100})}</Grid>

  return (
    <Layout>
      <TopNavbar/>
      <MenuNavbar/>
      <WelcomeScreen/>
      <Transition in={cardClicked.clicked} timeout={150} mountOnEnter unmountOnExit>
        {state => (
          <FullCard 
            img={img} 
            onClose={closeBackdrop} 
            clicked={cardClicked.clicked}
            style={{transition: 'opacity 0.15s ease', ...transitionStyles[state]}} 
          />
        )}
      </Transition>
      <Heading id='gustari' title='Закуски'/>
      {width && (width > 400 ? carousel : grid)}
      <Heading id='salate' title='Салаты'/>
      {width && (width > 400 ? carousel : grid)}
      <Heading id='supe' title='Супы'/>
      {width && (width > 400 ? carousel : grid)}
      <Heading id='pizza' title='Пицца'/>
      {width && (width > 400 ? carousel : grid)}
    </Layout>
  )
}
