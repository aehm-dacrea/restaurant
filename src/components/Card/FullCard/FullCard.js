import React from 'react'
import Img from 'gatsby-image'
import useWindowWidth from '../../../hooks/useWindowWidth'
import T from '../../utils/i18n'
// import { document } from 'browser-monads'

import Backdrop from '../../Backdrop'
import styles from './FullCard.module.css'

const FullCard = (props) => {
  // useEffect(() => {
  //   document.querySelector('html').style.overflow = 'hidden'
  //   return () => document.querySelector('html').style.overflow = 'auto'
  // })
  const width = useWindowWidth()
  const imgSize = {
    width: width < 500 ? 350 : 500,
    height: width < 500 ? 300 : 400
  }
  const id = () => Math.random().toString(36).substr(2, 9)

  const Composition = () => {
    const ingredientList = props.composition.split(', ')
    return (
      <>
        {ingredientList.map((ingredient, index) => {
          if (index === ingredientList.length-1) {
            return <span key={id()}>{` ${ingredient}`}</span>
          }
          return <span key={id()}>{` ${ingredient},`}</span>
        })}
      </>
    )
  }

  const Weight = () => {
    const weightList = props.weight.split('/')
    return (
      <div>
        {weightList.map((weight, index) => {
          if (index === weightList.length-1) {
            return <span key={id()}>{`${weight}`}</span>
          }
          return <span key={id()}>{`${weight}/`}</span>
        })}
      </div>
    )
  }

  const content = (
    <div className={styles.Container}>
      <Backdrop style={props.style} onClose={props.onClose} />
      <div 
        className={styles.FullCard}
        style={props.style}
      >
        {props.img ? <Img className={styles.Img} alt={props.alt} fixed={{...props.img, ...imgSize}}/> : null}
        <p className={styles.name}>{props.name}</p>
        <div className={styles.weight}>
          <p>{`${T('Вес:', 'Masa netă:')} `}</p>
          <Weight/>
        </div>
        <p className={styles.composition}>
          {props.composition ? <span style={{borderBottom: '1px solid currentColor'}}>{T('Состав:', 'Ingrediente:')}</span> : null}
          {props.composition ? <Composition/> : ' '}
        </p>
        <button className={styles.button} onClick={props.onClose}>{T('Закрыть', 'Închide')}</button>
      </div>
    </div>
  )

  return content
}

export default FullCard
