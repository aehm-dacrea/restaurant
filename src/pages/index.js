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
    return category[1].nodes.map((node, index) => (
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
    category[1].nodes.map(node => dataArray.push(node))

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
    <LangContext.Provider value='ru'>
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
          ? <Carousel id={"gustari"} title={'Холодные Закуски'}>{mapCards(gustariRece)}</Carousel> 
          : <Grid onClick={clickHandler} id={"gustari"} title={'Холодные Закуски'}>{mapImages(gustariRece)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel title={'Горячие Закуски'}>{mapCards(gustariCalde)}</Carousel> 
          : <Grid onClick={clickHandler} title={'Горячие Закуски'}>{mapImages(gustariCalde)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"salate"} title={'Салаты'}>{mapCards(salate)}</Carousel> 
          : <Grid onClick={clickHandler} id={"salate"} title={'Салаты'}>{mapImages(salate)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"supe"} title={'Супы'}>{mapCards(supe)}</Carousel> 
          : <Grid onClick={clickHandler} id={"supe"} title={'Супы'}>{mapImages(supe)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"pizza"} title={'Пицца'}>{mapCards(pizza)}</Carousel> 
          : <Grid onClick={clickHandler} id={"pizza"} title={'Пицца'}>{mapImages(pizza)}</Grid>)
        }
        {/* {width && (width > 400 
          ? <Carousel id={"bucate-calde"} title={'Блюда из Свинины'}>{mapCards(bucateDinPorc)}</Carousel> 
          : <Grid onClick={clickHandler} id={"bucate-calde"} title={'Блюда из Свинины'}>{mapImages(bucateDinPorc)}</Grid>)
        } */}
        {/* {width && (width > 400 
          ? <Carousel title={'Блюда из Говядины'}>{mapCards(bucateDinVita)}</Carousel> 
          : <Grid onClick={clickHandler} title={'Блюда из Говядины'}>{mapImages(bucateDinVita)}</Grid>)
        } */}
        {width && (width > 400 
          ? <Carousel title={'Рыбные Блюда'}>{mapCards(bucateDinPeste)}</Carousel> 
          : <Grid onClick={clickHandler} title={'Рыбные Блюда'}>{mapImages(bucateDinPeste)}</Grid>)
        }
        {width && (width > 400 
          ? <Carousel id={"pentru-companii"} title={'Блюда для Компании'}>{mapCards(pentruCompanii)}</Carousel> 
          : <Grid onClick={clickHandler} id={"pentru-companii"} title={'Для Компании'}>{mapImages(pentruCompanii)}</Grid>)
        }
        {/* {width && (width > 400 
          ? <Carousel id={"garnituri"} title={'Гарниры'}>{mapCards(garnituri)}</Carousel> 
          : <Grid onClick={clickHandler} id={"garnituri"} title={'Гарниры'}>{mapImages(garnituri)}</Grid>)
        } */}

        
      </Layout>
    </LangContext.Provider>
  )
}
