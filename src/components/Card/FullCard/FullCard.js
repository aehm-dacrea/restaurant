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
  const content = (
    <div className={styles.Container}>
      <Backdrop style={props.style} onClose={props.onClose} />
      <div 
        className={styles.FullCard}
        style={props.style}
      >
        {props.img ? <Img className={styles.Img} alt={props.alt} fixed={{...props.img, ...imgSize}}/> : null}
        <p className={styles.name}>{props.name}</p>
        <p className={styles.weight}>{`${T('Вес:', 'Masa netă:')} ${props.weight}`}</p>
        <p className={styles.composition}><span style={{borderBottom: '1px solid currentColor'}}>{T('Состав:', 'Ingrediente:')}</span>{` ${props.composition ?? ' '}`}</p>
        <button className={styles.button} onClick={props.onClose}>{T('Закрыть', 'Închide')}</button>
      </div>
    </div>
  )

  return content
}

export default FullCard
