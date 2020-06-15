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

  const mapCards = (category, size = {}) => {
    const imgArray = []
    category[0].nodes.map(node => imgArray.push(node.foto.localFile.childImageSharp.fixed))
    return category[0].nodes.map((node, index) => (
      <Card
        key={node.id} 
        id={node.id} 
        img={imgArray[index]} 
        onClick={clickHandler}
        name={node.name}
        weight={node.weight}
        price={node.price}
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

  const mapImages = (category) => {
    const dataArray = []
    category[0].nodes.map(node => dataArray.push(node))

    return category[0].nodes.map((node, index) => (
      <Img 
        key={dataArray[index].id}
        style={{borderRadius: '5px'}} 
        fixed={{...node.foto.localFile.childImageSharp.fixed, height: 100, width: 100}} 
        name={dataArray[index].name}
        weight={dataArray[index].weight}
        price={dataArray[index].price}
        alt={dataArray[index].alt}
        composition={dataArray[index].composition}
      />
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
        {width && (width > 400 
          ? <Carousel id={"gustari"} title={'Gustări Rece'}>{mapCards(gustariRece)}</Carousel> 
          : <Grid onClick={clickHandler} id={"gustari"} title={'Gustări Rece'}>{mapImages(gustariRece)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel title={'Gustări Calde'}>{mapCards(gustariCalde)}</Carousel> 
          : <Grid onClick={clickHandler} title={'Gustări Calde'}>{mapImages(gustariCalde)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"salate"} title={'Salate'}>{mapCards(salate)}</Carousel> 
          : <Grid onClick={clickHandler} id={"salate"} title={'Salate'}>{mapImages(salate)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"supe"} title={'Supe'}>{mapCards(supe)}</Carousel> 
          : <Grid onClick={clickHandler} id={"supe"} title={'Supe'}>{mapImages(supe)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"pizza"} title={'Pizza'}>{mapCards(pizza)}</Carousel> 
          : <Grid onClick={clickHandler} id={"pizza"} title={'Pizza'}>{mapImages(pizza)}</Grid>)
        }
        {/* {width && (width > 400 
          ? <Carousel id={"bucate-calde"} title={'Bucate din Porc'}>{mapCards(bucateDinPorc)}</Carousel> 
          : <Grid onClick={clickHandler} id={"bucate-calde"} title={'Bucate din Porc'}>{mapImages(bucateDinPorc)}</Grid>)
        } */}
        {/* {width && (width > 400 
          ? <Carousel title={'Блюда из Говядины'}>{mapCards(Bucate din Vită)}</Carousel> 
          : <Grid onClick={clickHandler} title={'Блюда из Говядины'}>{mapImages(Bucate din Vită)}</Grid>)
        } */}
        {width && (width > 400 
          ? <Carousel title={'Bucate din Pește'}>{mapCards(bucateDinPeste)}</Carousel> 
          : <Grid onClick={clickHandler} title={'Bucate din Pește'}>{mapImages(bucateDinPeste)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"pentru-companii"} title={'Pentru Companii'}>{mapCards(pentruCompanii)}</Carousel> 
          : <Grid onClick={clickHandler} id={"pentru-companii"} title={'Pentru Companii'}>{mapImages(pentruCompanii)}</Grid>)
        }
        {/* {width && (width > 400 
          ? <Carousel id={"garnituri"} title={'Gărnituri'}>{mapCards(garnituri)}</Carousel> 
          : <Grid onClick={clickHandler} id={"garnituri"} title={'Gărnituri'}>{mapImages(garnituri)}</Grid>)
        } */}
      </Layout>
    </LangContext.Provider>
  )
}
