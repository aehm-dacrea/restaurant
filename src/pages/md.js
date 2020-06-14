import React, { useState, useEffect } from "react"
import Img from 'gatsby-image'
import { Transition } from 'react-transition-group'
import useData from '../hooks/useData'
import useWindowWidth from '../hooks/useWindowWidth'
import LangContext from '../hooks/LangContext'

import Layout from '../layout/index'
import TopNavbar from "../components/TopNavbar/TopNavbar"
import FullCard from '../components/Card/FullCard'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import MenuNavbar from '../components/MenuNavbar'
import Heading from '../components/Heading'
import WelcomeScreen from '../components/WelcomeScreen'
import Card from '../components/Card'

export default function Home() {
  const {
    gustariRece,
    gustariCalde,
    salate,
    supe,
    pizza,
    bucateDinPorc,
    bucateDinVita,
    bucateDinPeste,
    pentruCompanii,
    garnituri,
    clatite,
    deserte,
    bauturiAlcoholice,
    bauturiNonAlcoholice,
  } = useData()
  const [width, setWidth] = useState(null)
  let windowWidth = useWindowWidth()
  useEffect(() => {
    setWidth(windowWidth)
  }, [])
  const [cardClicked, setCardClicked] = useState({id: null, clicked: false})
  const [img, setImg] = useState(null)
  const [card, setCard] = useState(null)
  const clickHandler = (id, img, card) => {
    setCardClicked({id: id, clicked: true})
    setImg(img)
    setCard({...card})
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

  const mapCards = (nodes, size = {}) => {
    return nodes.map(node => (
      <Card
        key={node.id} 
        id={node.id} 
        img={node.foto.localFile.childImageSharp.fixed} 
        onClick={clickHandler}
        name={node.name}
        weight={node.weight}
        price={node.price}
        alt={node.alt}
        composition={node.composition}
      >
        <Img key={node.id} style={{borderRadius: '5px'}} alt={node.alt} fixed={{...node.foto.localFile.childImageSharp.fixed, ...size}}/>
      </Card>
    ))
  }

  return (
    <LangContext.Provider value='ro'>
      <Layout>
        <TopNavbar/>
        <MenuNavbar/>
        <WelcomeScreen/>
        <Transition in={cardClicked.clicked} timeout={150} mountOnEnter unmountOnExit>
          {state => (
            <FullCard 
              img={img} 
              alt={card.alt}
              name={card.name}
              weight={card.weight}
              composition={card.composition}
              onClose={closeBackdrop} 
              clicked={cardClicked.clicked}
              style={{transition: 'opacity 0.15s ease', ...transitionStyles[state]}} 
            />
          )}
        </Transition>
        <Carousel>{mapCards(gustariRece[0].nodes)}</Carousel>
        {/* <Heading id='gustari' title='Закуски'/>
        {width && (width > 400 ? carousel : grid)}
        <Heading id='salate' title='Салаты'/>
        {width && (width > 400 ? carousel : grid)}
        <Heading id='supe' title='Супы'/>
        {width && (width > 400 ? carousel : grid)}
        <Heading id='pizza' title='Пицца'/>
        {width && (width > 400 ? carousel : grid)} */}
      </Layout>
    </LangContext.Provider>
  )
}
