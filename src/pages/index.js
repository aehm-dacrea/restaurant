import React, { useState, useEffect, useCallback } from "react"
import Img from 'gatsby-image'
import { Transition } from 'react-transition-group'
import useData from '../hooks/useData'
import useWindowWidth from '../hooks/useWindowWidth'
import LangContext from '../hooks/LangContext'

import Layout from '../layout/index'
import TopNavbar from "../components/TopNavbar"
import FullCard from '../components/Card/FullCard'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import MenuNavbar from '../components/MenuNavbar'
import WelcomeScreen from '../components/WelcomeScreen'
import Card from '../components/Card'
import Advertisement from '../components/Advertisement'
import CallWindow from '../components/CallWindow'

export default function Home() {
  const {
    gustariRece,
    gustariCalde,
    gustariLaBere,
    salate,
    supe,
    pizza,
    bucateDinPorc,
    bucateDinVita,
    bucateDinPui,
    bucateDinPeste,
    pentruCompanii,
    garnituri,
    clatite,
    deserte,
    bauturiAlcoholice,
    bauturiNonAlcoholice,
    site: {siteTitle, siteDescription}
  } = useData()
  let windowWidth = useWindowWidth()
  const [width, setWidth] = useState(null)
  const [adOpened, setAdOpened] = useState(false)
  const [cardClicked, setCardClicked] = useState({id: null, clicked: false})
  const [img, setImg] = useState(null)
  const [card, setCard] = useState(null)
  const [callWindowOpened, setCallWindowOpened] = useState(false)

  useEffect(() => {
    setWidth(windowWidth)
    const timeout = setTimeout(() => {setAdOpened(true)}, 5000)
    return () => clearTimeout(timeout)
  }, [])
  
  const clickHandler = useCallback((id, img, card) => {
    setCardClicked({id: id, clicked: true})
    setImg(img)
    setCard({...card})
  }, [])
  const closeBackdrop = () => {
    setCardClicked({...cardClicked, clicked: false})
  }
  const closeAd = () => {
    setAdOpened(false)
  }
  const openCallWindow = () => {
    setCallWindowOpened(true)
  }
  const closeCallWindow = () => {
    setCallWindowOpened(false)
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
        oldPrice={dataArray[index].oldPrice}
        alt={dataArray[index].alt}
        composition={dataArray[index].composition}
      />
    ))
  }

  const dishes = [
    {category: gustariRece, title: 'Холодные Закуски', gridTitle: 'Холодные Закуски', id: 'gustari'},
    {category: gustariCalde, title: 'Горячие Закуски', gridTitle: 'Горячие Закуски'},
    {category: gustariLaBere, title: 'Закуски к Пиву', gridTitle: 'Закуски к Пиву'},
    {category: salate, title: 'Салаты', gridTitle: 'Салаты', id: 'salate'},
    {category: supe, title: 'Супы', gridTitle: 'Супы', id: 'supe'},
    {category: pizza, title: 'Пицца', gridTitle: 'Пицца', id: 'pizza'},
    {category: bucateDinPorc, title: 'Блюда из Свинины', gridTitle: 'Блюда из Свинины', id: 'bucate-calde'},
    {category: bucateDinVita, title: 'Блюда из Говядины', gridTitle: 'Блюда из Говядины'},
    {category: bucateDinPui, title: 'Блюда из Курицы', gridTitle: 'Блюда из Курицы'},
    {category: bucateDinPeste, title: 'Рыбные Блюда', gridTitle: 'Рыбные Блюда'},
    {category: pentruCompanii, title: 'Блюда для Компании', gridTitle: 'Для Компании', id: 'pentru-companii'},
    {category: garnituri, title: 'Гарниры', gridTitle: 'Гарниры', id: 'garnituri'},
    {category: clatite, title: 'Блинчики', gridTitle: 'Блинчики', id: 'clatite'},
    {category: deserte, title: 'Десерты', gridTitle: 'Десерты', id: 'deserte'},
    {category: bauturiAlcoholice, title: 'Безалкогольные Напитки', gridTitle: 'Безалкогольные', id: 'bauturi'},
    {category: bauturiNonAlcoholice, title: 'Алкогольные Напитки', gridTitle: 'Алкогольные'},
  ]

  const mapDishes = dishes => dishes.map(dish => (
    <div key={dish.title}>
      <Carousel category={dish.category} onClick={clickHandler} id={dish.id ? dish.id : null} title={dish.title} />
      <Grid category={dish.category} onClick={clickHandler} id={dish.id ? dish.id : null} title={dish.gridTitle} />
    </div>
  ))

  return (
    <LangContext.Provider value='ru'>
      <Layout title={siteTitle} description={siteDescription}>
        <TopNavbar/>
        <MenuNavbar/>
        <WelcomeScreen open={openCallWindow}/>
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
        <Transition in={callWindowOpened} timeout={150} mountOnEnter unmountOnExit>
          {state => <CallWindow style={{...transitionStyles[state], }} close={closeCallWindow} opened={callWindowOpened}/>}
        </Transition>
        <Transition in={adOpened} timeout={200} mountOnEnter unmountOnExit>
          {state => <Advertisement style={{...transitionStyles[state]}} close={closeAd}/>}
        </Transition>

        {mapDishes(dishes)}

        {/* {width && (width > 550 
          ? <Carousel category={gustariRece} onClick={clickHandler} id={"gustari"} title={'Холодные Закуски'} />
          : <Grid category={gustariRece} onClick={clickHandler} id={"gustari"} title={'Холодные Закуски'}>{mapImages(gustariRece)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={gustariCalde} onClick={clickHandler} title={'Горячие Закуски'} />
          : <Grid category={gustariCalde} onClick={clickHandler} title={'Горячие Закуски'}>{mapImages(gustariCalde)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={gustariLaBere} onClick={clickHandler} title={'Закуски к Пиву'} />
          : <Grid category={gustariLaBere} onClick={clickHandler} title={'Закуски к Пиву'}>{mapImages(gustariLaBere)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={salate} onClick={clickHandler} id={"salate"} title={'Салаты'} />
          : <Grid category={salate} onClick={clickHandler} id={"salate"} title={'Салаты'}>{mapImages(salate)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={supe} onClick={clickHandler} id={"supe"} title={'Супы'} />
          : <Grid category={supe} onClick={clickHandler} id={"supe"} title={'Супы'}>{mapImages(supe)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={pizza} onClick={clickHandler} id={"pizza"} title={'Пицца'} />
          : <Grid category={pizza} onClick={clickHandler} id={"pizza"} title={'Пицца'}>{mapImages(pizza)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={bucateDinPorc} onClick={clickHandler} id={"bucate-calde"} title={'Блюда из Свинины'} /> 
          : <Grid category={bucateDinPorc} onClick={clickHandler} id={"bucate-calde"} title={'Блюда из Свинины'}>{mapImages(bucateDinPorc)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={bucateDinVita} onClick={clickHandler} title={'Блюда из Говядины'} />
          : <Grid category={bucateDinVita} onClick={clickHandler} title={'Блюда из Говядины'}>{mapImages(bucateDinVita)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={bucateDinPui} onClick={clickHandler} title={'Блюда из Курицы'} />
          : <Grid category={bucateDinPui} onClick={clickHandler} title={'Блюда из Курицы'}>{mapImages(bucateDinPui)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={bucateDinPeste} onClick={clickHandler} title={'Рыбные Блюда'} />
          : <Grid category={bucateDinPeste} onClick={clickHandler} title={'Рыбные Блюда'}>{mapImages(bucateDinPeste)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={pentruCompanii} onClick={clickHandler} id={"pentru-companii"} title={'Блюда для Компании'} />
          : <Grid category={pentruCompanii} onClick={clickHandler} id={"pentru-companii"} title={'Для Компании'}>{mapImages(pentruCompanii)}</Grid>)
        }
        {width && (width > 550
          ? <Carousel category={garnituri} onClick={clickHandler} id={"garnituri"} title={'Гарниры'} /> 
          : <Grid category={garnituri} onClick={clickHandler} id={"garnituri"} title={'Гарниры'}>{mapImages(garnituri)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={clatite} onClick={clickHandler} id={"clatite"} title={'Блинчики'} />
          : <Grid category={clatite} onClick={clickHandler} id={"clatite"} title={'Блинчики'}>{mapImages(clatite)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={deserte} onClick={clickHandler} id={"deserte"} title={'Десерты'} />
          : <Grid category={deserte} onClick={clickHandler} id={"deserte"} title={'Десерты'}>{mapImages(deserte)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={bauturiNonAlcoholice} onClick={clickHandler} id={"bauturi"} title={'Безалкогольные Напитки'} />
          : <Grid category={bauturiNonAlcoholice} onClick={clickHandler} id={"bauturi"} title={'Безалкогольные'}>{mapImages(bauturiNonAlcoholice)}</Grid>)
        }
        {width && (width > 550 
          ? <Carousel category={bauturiAlcoholice} onClick={clickHandler} title={'Алкогольные Напитки'} />
          : <Grid category={bauturiAlcoholice} onClick={clickHandler} title={'Алкогольные'}>{mapImages(bauturiAlcoholice)}</Grid>)
        } */}
        
      </Layout>
    </LangContext.Provider>
  )
}
